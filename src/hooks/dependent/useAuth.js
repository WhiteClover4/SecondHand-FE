import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { localStorageTokenKey } from '../../constants/environment';
import { SET_ALERT } from '../../redux/slice/alert';
import { CHANGE_AUTH, SET_TOKEN } from '../../redux/slice/auth';
import { loginService, registerService } from '../../services/api/auth';
import { getUserDataWithGoogle } from '../../services/firebase/auth';
import useError from './useError';
import { rot13 } from '../../constants/encryption';

export default function useAuth() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState({ register: false, login: false });
  const errorHandler = useError();

  async function register(name, email, password, autoLogin) {
    setLoading({ ...loading, register: true });
    try {
      const res = await registerService(name, email, rot13(password));

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(SET_ALERT([{ status: 'success', message: res.msg }]));

      !autoLogin ? navigate('/login') : login(email, password);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, register: false });
    }
  }

  async function login(email, password) {
    setLoading({ ...loading, login: true });
    try {
      const res = await loginService(email, rot13(password));

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(SET_ALERT([{ status: 'success', message: res.msg }]));

      dispatch(SET_TOKEN(res.token));

      dispatch(CHANGE_AUTH(true));

      const saveToken = {
        value: res.token,
        expiry: new Date().getTime() + 3600000, // 1 hour in milliseconds
      };

      localStorage.setItem(localStorageTokenKey, JSON.stringify(saveToken));
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, login: false });
    }
  }

  function logout() {
    dispatch(SET_TOKEN(''));
    dispatch(CHANGE_AUTH(false));
    localStorage.removeItem(localStorageTokenKey);
  }

  const checkToken = useCallback(() => {
    const tokenStr = localStorage.getItem(localStorageTokenKey);

    if (!tokenStr) return;

    const getToken = JSON.parse(tokenStr);

    if (new Date().getTime() > getToken.expiry) {
      dispatch(SET_TOKEN(''));
      dispatch(CHANGE_AUTH(false));
      localStorage.removeItem(localStorageTokenKey);
      return;
    }

    if (isAuthenticated) return;

    dispatch(SET_TOKEN(getToken.value));
    dispatch(CHANGE_AUTH(true));
  }, [dispatch, isAuthenticated, pathname]);

  async function registerWithGoogle() {
    setLoading({ ...loading, register: true });
    try {
      const res = await getUserDataWithGoogle();

      const isError = errorHandler(res);

      if (isError) return;

      register(res.displayName, res.email, rot13(res.uid), true);
    } catch (error) {
      errorHandler(error);
      setLoading({ ...loading, register: false });
    }
  }

  async function loginWithGoogle() {
    setLoading({ ...loading, login: true });
    try {
      const res = await getUserDataWithGoogle();

      const isError = errorHandler(res);

      if (isError) return;

      login(res.email, rot13(res.uid));
    } catch (error) {
      errorHandler(error);
      setLoading({ ...loading, login: false });
    }
  }

  return { loading, register, login, logout, checkToken, registerWithGoogle, loginWithGoogle };
}

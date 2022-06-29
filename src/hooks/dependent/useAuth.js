import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_ALERT, SET_ALERT } from '../../redux/slice/alert';
import { CHANGE_AUTH, SET_TOKEN } from '../../redux/slice/auth';
import { loginService, registerService } from '../../services/api/auth';

export default function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ register: false, login: false });

  async function register(name, email, password) {
    setLoading({ ...loading, register: true });
    try {
      const res = await registerService(name, email, password);

      if (res.errors) {
        res.errors.forEach((error) => {
          dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
        });
        return;
      }

      dispatch(SET_ALERT([{ status: 'success', message: res.msg }]));

      navigate('/login');
    } catch (error) {
      console.log('register error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
    } finally {
      setLoading({ ...loading, register: false });
    }
  }

  async function login(email, password) {
    setLoading({ ...loading, login: true });
    try {
      const res = await loginService(email, password);

      if (res.errors) {
        res.errors.forEach((error) => {
          dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
        });
        return;
      }

      if (res.status === 'Failed')
        return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      dispatch(SET_ALERT([{ status: 'success', message: res.msg }]));

      dispatch(SET_TOKEN(res.token));

      dispatch(CHANGE_AUTH(true));

      localStorage.setItem('token', res.token);
    } catch (error) {
      console.log('login error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
    } finally {
      setLoading({ ...loading, login: false });
    }
  }

  function logout() {
    dispatch(SET_TOKEN(''));
    dispatch(CHANGE_AUTH(false));
    localStorage.removeItem('token');
  }

  return { loading, register, login, logout };
}

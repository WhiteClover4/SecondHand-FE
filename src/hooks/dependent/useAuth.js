import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { CHANGE_AUTH, SET_TOKEN } from '../../redux/slice/auth';
import { loginService, registerService } from '../../services/api/auth';

export default function useAuth() {
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function register(name, email, password) {
    setLoading(true);
    try {
      const res = await registerService(name, email, password);

      if (res.errors) {
        res.errors.forEach((error) => {
          dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
        });
        return;
      }
    } catch (error) {
      console.log('login error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    setLoading(true);
    try {
      const res = await loginService(email, password);

      if (res.errors) {
        res.errors.forEach((error) => {
          dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
        });
        return;
      }

      dispatch(SET_TOKEN(res.token));

      dispatch(CHANGE_AUTH(true));
    } catch (error) {
      console.log('login error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    dispatch(SET_TOKEN(''));
    dispatch(CHANGE_AUTH(false));
    localStorage.removeItem('token');
  }

  return { isLoading, register, login, logout };
}

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { getProfileService, updateProfileService } from '../../services/api/profile';
import { initialUserData } from '../../utils/initial';
import useError from './useError';

export default function useProfile() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(initialUserData);
  const [loading, setLoading] = useState({ getProfile: false, updateProfile: false });
  const errorHandler = useError();

  const setUserDataInput = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  function setFileInput(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setUserData({ ...userData, profile_picture: url, file });
  }

  const getProfile = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getProfile: true });
    try {
      const res = await getProfileService(token);

      const isError = errorHandler(res);

      if (isError) return;

      setUserData({ ...res.data, file: null });
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, getProfile: false });
    }
  }, [dispatch, token, isAuthenticated]);

  async function updateProfile() {
    if (!isAuthenticated) return;

    setLoading({ ...loading, updateProfile: true });

    try {
      const { name, city, address, phone_number, file } = userData;

      const res = await updateProfileService(token, name, city, address, phone_number, file);

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: 'success', message: res.msg }));

      await getProfile();
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, updateProfile: false });
    }
  }

  return { getProfile, updateProfile, userData, setUserDataInput, setFileInput, loading };
}

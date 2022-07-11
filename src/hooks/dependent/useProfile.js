import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { getProfileService, updateProfileService } from '../../services/api/profile';
import { initialUserData } from '../../utils/initial';

export default function useProfile() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(initialUserData);
  const [loading, setLoading] = useState({ getProfile: false, updateProfile: false });

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

      if (!res.data) return ADD_ALERT({ status: 'error', message: res });

      setUserData({ ...res.data, file: null });
    } catch (error) {
      console.log('get profile error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
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

      if (res.status !== 'Success')
        return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      dispatch(ADD_ALERT({ status: 'success', message: res.msg }));

      await getProfile();
    } catch (error) {
      console.log('update profile error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, updateProfile: false });
    }
  }

  return { getProfile, updateProfile, userData, setUserDataInput, setFileInput, loading };
}

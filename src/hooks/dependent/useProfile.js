import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { SET_USER_DATA } from '../../redux/slice/profile';
import { getProfileService, updateProfileService } from '../../services/api/profile';

export default function useProfile() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState({ getProfile: false, updateProfile: false });

  const getProfile = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getProfile: true });
    try {
      const res = await getProfileService(token);

      if (!res.data) return ADD_ALERT({ status: 'error', message: res });

      dispatch(SET_USER_DATA({ ...res.data, file: null }));
    } catch (error) {
      console.log('get profile error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, getProfile: false });
    }
  }, [dispatch]);

  async function updateProfile() {
    if (!isAuthenticated) return;

    setLoading({ ...loading, updateProfile: true });

    try {
      const { name, city, address, phone_number, file } = userData;

      const res = await updateProfileService(token, name, city, address, phone_number, file);

      dispatch(ADD_ALERT({ status: 'success', message: res.msg }));

      await getProfile();
    } catch (error) {
      console.log('update profile error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, updateProfile: false });
    }
  }

  return { getProfile, updateProfile, loading };
}

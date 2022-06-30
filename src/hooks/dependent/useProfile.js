import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { SET_USER_DATA } from '../../redux/slice/profile';
import { getProfileService } from '../../services/api/profile';

export default function useProfile() {
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ getProfile: false });

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

  return { getProfile, loading };
}

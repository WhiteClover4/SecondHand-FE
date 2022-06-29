import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { getProfileService } from '../../services/api/profile';

export default function useProfile() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ getProfile: false });

  async function getProfile() {
    setLoading({ ...loading, getProfile: true });
    try {
      const res = await getProfileService(token);

      if (!res.data) return ADD_ALERT({ status: 'error', message: res });
    } catch (error) {
      console.log('get profile error', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
    } finally {
      setLoading({ ...loading, getProfile: false });
    }
  }

  return { getProfile, loading };
}

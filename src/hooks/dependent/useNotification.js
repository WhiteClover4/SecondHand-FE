import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { getNotificationService, readNotificationService } from '../../services/api/notification';

export default function useNotification() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState({ getNotification: false, readNotification: false });

  const getNotification = useCallback(async () => {
    if (!isAuthenticated) return;
    setLoading({ ...loading, notification: true });
    try {
      const res = await getNotificationService(token);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      if (res.status === 'error') return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      setNotification(res.data);
    } catch (error) {
      console.log('error get products', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, notification: false });
    }
  }, [dispatch, token, isAuthenticated]);

  async function readNotification(notifId) {
    setLoading({ ...loading, readNotification: true });
    try {
      const res = await readNotificationService(token, notifId);

      if (res.status === 'error') return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      await getNotification();
    } catch (error) {
      console.log('error get products', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, readNotification: false });
    }
  }

  return { getNotification, notification, readNotification, loading };
}

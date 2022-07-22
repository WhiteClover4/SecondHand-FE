import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotificationService, readNotificationService } from '../../services/api/notification';
import useError from './useError';

export default function useNotification() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [notification, setNotification] = useState([]);
  const [loading, setLoading] = useState({ getNotification: false, readNotification: false });
  const errorHandler = useError();

  const getNotification = useCallback(async () => {
    if (!isAuthenticated) return;
    setLoading({ ...loading, notification: true });
    try {
      const res = await getNotificationService(token);

      const isError = errorHandler(res);

      if (isError) return;

      setNotification(res.data);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, notification: false });
    }
  }, [dispatch, token, isAuthenticated]);

  async function readNotification(notifId) {
    setLoading({ ...loading, readNotification: true });
    try {
      const res = await readNotificationService(token, notifId);

      const isError = errorHandler(res);

      if (isError) return;

      await getNotification();
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, readNotification: false });
    }
  }

  return { getNotification, notification, readNotification, loading };
}

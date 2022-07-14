import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  acceptTransactionService,
  getAllHistoryService,
  getTransactionService,
  getTransactionStatusService,
  rejectTransactionService,
  updateTransactionStatusService,
} from '../../services/api/transaction';
import { initialTransaction } from '../../utils/initial';

export default function useTransaction() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [transaction, setTransaction] = useState(initialTransaction);
  const [history, setHistory] = useState([]);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [loading, setLoading] = useState({
    getTransaction: false,
    acceptTransaction: false,
    rejectTransaction: false,
    updateTransactionStatus: false,
    getAllHistory: false,
  });

  const getTransaction = useCallback(
    async (transactionId) => {
      if (!isAuthenticated) return;

      setLoading({ ...loading, getTransaction: true });
      try {
        const res = await getTransactionService(token, transactionId);

        if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

        if (res.status === 'error')
          return dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

        setTransaction(res.data);
      } catch (error) {
        console.log('error get transaction', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, getTransaction: false });
      }
    },
    [dispatch, token, isAuthenticated],
  );

  async function acceptTransaction(transactionId, openModal) {
    setLoading({ ...loading, acceptTransaction: true });
    try {
      const res = await acceptTransactionService(token, transactionId);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      openModal();

      await getTransaction(transactionId);
    } catch (error) {
      console.log('error accept transaction', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, acceptTransaction: false });
    }
  }

  async function rejectTransaction(transactionId) {
    setLoading({ ...loading, rejectTransaction: true });
    try {
      const res = await rejectTransactionService(token, transactionId);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      await getTransaction(transactionId);
    } catch (error) {
      console.log('error reject transaction', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, rejectTransaction: false });
    }
  }

  const getTransactionStatus = useCallback(
    async (transactionId) => {
      if (!isAuthenticated) return;

      try {
        const res = await getTransactionStatusService(token, transactionId);

        if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

        if (res.status === 'error')
          return dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

        setTransactionStatus(res.data.isCompleted);
      } catch (error) {
        console.log('error get transaction', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      }
    },
    [dispatch],
  );

  async function updateTransactionStatus(transactionId, status) {
    setLoading({ ...loading, updateTransactionStatus: true });
    try {
      const res = await updateTransactionStatusService(token, transactionId, status);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      await getTransactionStatus(transactionId);
    } catch (error) {
      console.log('error update transaction status', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, updateTransactionStatus: false });
    }
  }

  const getAllHistory = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getAllHistory: true });
    try {
      const res = await getAllHistoryService(token);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      if (res.status === 'error')
        return dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      setHistory(res.data);
    } catch (error) {
      console.log('error get transaction', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, getAllHistory: false });
    }
  }, [dispatch, token, isAuthenticated]);

  return {
    transaction,
    getTransaction,
    acceptTransaction,
    rejectTransaction,
    transactionStatus,
    getTransactionStatus,
    updateTransactionStatus,
    getAllHistory,
    history,
    loading,
  };
}

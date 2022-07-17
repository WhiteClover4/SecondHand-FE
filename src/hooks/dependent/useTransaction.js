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
import useError from './useError';

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
  const errorHandler = useError();

  const getTransaction = useCallback(
    async (transactionId) => {
      if (!isAuthenticated) return;

      setLoading({ ...loading, getTransaction: true });
      try {
        const res = await getTransactionService(token, transactionId);

        const isError = errorHandler(res);

        if (isError) return;

        setTransaction(res.data);
      } catch (error) {
        errorHandler(error);
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

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      openModal();

      await getTransaction(transactionId);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, acceptTransaction: false });
    }
  }

  async function rejectTransaction(transactionId) {
    setLoading({ ...loading, rejectTransaction: true });
    try {
      const res = await rejectTransactionService(token, transactionId);

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      await getTransaction(transactionId);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, rejectTransaction: false });
    }
  }

  const getTransactionStatus = useCallback(
    async (transactionId) => {
      if (!isAuthenticated) return;

      try {
        const res = await getTransactionStatusService(token, transactionId);

        const isError = errorHandler(res);

        if (isError) return;

        setTransactionStatus(res.data.isCompleted);
      } catch (error) {
        errorHandler(error);
      }
    },
    [dispatch],
  );

  async function updateTransactionStatus(transactionId, status) {
    setLoading({ ...loading, updateTransactionStatus: true });
    try {
      const res = await updateTransactionStatusService(token, transactionId, status);

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      await getTransactionStatus(transactionId);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, updateTransactionStatus: false });
    }
  }

  const getAllHistory = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getAllHistory: true });
    try {
      const res = await getAllHistoryService(token);

      const isError = errorHandler(res);

      if (isError) return;

      setHistory(res.data);
    } catch (error) {
      errorHandler(error);
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

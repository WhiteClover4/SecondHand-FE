import { useDispatch } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';

export default function useError() {
  const dispatch = useDispatch();

  function errorHandler(response) {
    if (typeof response === 'string') {
      dispatch(ADD_ALERT({ status: 'error', message: response }));
      return true;
    }

    if (response.errors) {
      response.errors.forEach((error) => {
        dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
      });
      return true;
    }

    if (response.status === 'Failed') {
      dispatch(ADD_ALERT({ status: 'error', message: response.msg }));
      return true;
    }

    if (response.status === 'error') {
      dispatch(ADD_ALERT({ status: 'error', message: response.msg }));
      return true;
    }

    return false;
  }

  return errorHandler;
}

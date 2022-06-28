import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { SET_PRODUCTS } from '../../redux/slice/product';
import { getProductsService } from '../../services/api/product';

export default function useProduct() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ products: false });

  const getProducts = useCallback(
    async (search, category) => {
      setLoading({ ...loading, products: true });

      try {
        const res = await getProductsService(search, category);

        if (res.status === 'error') {
          dispatch(ADD_ALERT({ status: 'error', message: res.msg }));
          return;
        }

        dispatch(SET_PRODUCTS(res.data));
      } catch (error) {
        console.log('error get products', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'internal server error' }));
      } finally {
        setLoading({ ...loading, products: false });
      }
    },
    [dispatch],
  );

  return { getProducts, loading };
}

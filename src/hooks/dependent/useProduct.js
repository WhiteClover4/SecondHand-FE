import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { SET_PRODUCT, SET_PRODUCTS } from '../../redux/slice/product';
import { getProductService, getProductsService } from '../../services/api/product';

export default function useProduct() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ products: false, product: false });

  const getProducts = useCallback(
    async (search, category) => {
      setLoading({ ...loading, products: true });

      try {
        const res = await getProductsService(search, category);

        if (res.status === 'error')
          return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

        dispatch(SET_PRODUCTS(res.data));
      } catch (error) {
        console.log('error get products', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, products: false });
      }
    },
    [dispatch],
  );

  const getProduct = useCallback(
    async (productId) => {
      setLoading({ ...loading, product: true });
      try {
        const res = await getProductService(productId);

        if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

        dispatch(SET_PRODUCT(res.data));
      } catch (error) {
        console.log('error get product', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, product: false });
      }
    },
    [dispatch],
  );

  return { getProducts, getProduct, loading };
}

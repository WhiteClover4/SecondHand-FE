import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  bidProductService,
  getProductService,
  getProductsService,
} from '../../services/api/product';
import { initialProduct } from '../../utils/initial';

export default function useProduct() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);

  const [loading, setLoading] = useState({
    getProducts: false,
    getProduct: false,
    bidProduct: false,
  });

  const getProducts = useCallback(
    async (search, category) => {
      setLoading({ ...loading, getProducts: true });

      try {
        const res = await getProductsService(search, category);

        if (res.status === 'error')
          return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

        setProducts(res.data);
      } catch (error) {
        console.log('error get products', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, getProducts: false });
      }
    },
    [dispatch],
  );

  const getProduct = useCallback(
    async (productId) => {
      setLoading({ ...loading, getProduct: true });
      try {
        const res = await getProductService(productId);

        if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

        setProduct(res.data);
      } catch (error) {
        console.log('error get product', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, getProduct: false });
      }
    },
    [dispatch],
  );

  async function bidProduct(productId, bidPrice, closeModal) {
    setLoading({ ...loading, bidProduct: true });
    try {
      const res = await bidProductService(token, productId, bidPrice);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      if (res.errors) {
        res.errors.forEach((error) => {
          dispatch(ADD_ALERT({ status: 'error', message: error.msg }));
        });
        return;
      }

      if (res.status === 'Error')
        return dispatch(ADD_ALERT({ status: 'warning', message: res.msg }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      closeModal();
    } catch (error) {
      console.log('error bid product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, bidProduct: false });
    }
  }

  return { getProducts, getProduct, products, product, bidProduct, loading };
}

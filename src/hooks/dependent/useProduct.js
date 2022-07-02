import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  getProductService,
  getProductsService,
  getSellerProductsService,
} from '../../services/api/product';
import { initialProduct } from '../../utils/initial';

export default function useProduct() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [sellerProducts, setsellerProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState({
    getProducts: false,
    getProduct: false,
    getSellerProducts: false,
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

  const getSellerProducts = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getSellerProducts: true });
    try {
      const res = await getSellerProductsService(token);

      if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res }));

      setsellerProducts(res.data);
    } catch (error) {
      console.log('error get seller products', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, getSellerProducts: false });
    }
  }, [dispatch, isAuthenticated, token]);

  return {
    getProducts,
    getProduct,
    products,
    product,
    getSellerProducts,
    sellerProducts,
    loading,
  };
}

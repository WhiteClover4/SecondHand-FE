import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  getSellerProductService,
  getSellerProductsService,
  getWishlistProductService,
  updateStatusToPublishedService,
} from '../../services/api/product';
import { initialProduct } from '../../utils/initial';

export default function useSellerProduct() {
  const dispatch = useDispatch();
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [sellerProduct, setSellerProduct] = useState(initialProduct);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const [loading, setLoading] = useState({
    getSellerProducts: false,
    getSellerProduct: false,
    updateStatusProduct: false,
    getWishlistProduct: false,
  });

  const getSellerProducts = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getSellerProducts: true });
    try {
      const res = await getSellerProductsService(token);

      if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res }));

      setSellerProducts(res.data);
    } catch (error) {
      console.log('error get seller products', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, getSellerProducts: false });
    }
  }, [dispatch, isAuthenticated, token]);

  const getSellerProduct = useCallback(
    async (productId) => {
      if (!isAuthenticated) return;

      setLoading({ ...loading, getSellerProduct: true });
      try {
        const res = await getSellerProductService(token, productId);

        if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res }));

        setSellerProduct(res.data);
      } catch (error) {
        console.log('error get seller product', error);

        dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
      } finally {
        setLoading({ ...loading, getSellerProduct: false });
      }
    },
    [dispatch, token, isAuthenticated],
  );

  async function updateStatusToPublished(productId) {
    if (!isAuthenticated) return;

    setLoading({ ...loading, updateStatusProduct: true });
    try {
      const res = await updateStatusToPublishedService(token, productId);

      if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));
    } catch (error) {
      console.log('error update status product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, updateStatusProduct: false });
    }
  }

  const getWishlistProduct = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getWishlistProduct: true });
    try {
      const res = await getWishlistProductService(token);

      if (typeof res === 'string') return dispatch(ADD_ALERT({ status: 'error', message: res }));

      setWishlistProduct(res.data);
    } catch (error) {
      console.log('error get wishlit product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, getWishlistProduct: false });
    }
  }, [dispatch, token]);

  return {
    sellerProducts,
    sellerProduct,
    getSellerProducts,
    getSellerProduct,
    updateStatusToPublished,
    getWishlistProduct,
    wishlistProduct,
    loading,
  };
}

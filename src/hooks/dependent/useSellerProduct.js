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
import useError from './useError';
import useNotification from './useNotification';

export default function useSellerProduct() {
  const { getNotification } = useNotification();
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
  const errorHandler = useError();

  const getSellerProducts = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getSellerProducts: true });
    try {
      const res = await getSellerProductsService(token);

      const isError = errorHandler(res);

      if (isError) return;

      setSellerProducts(res.data);
    } catch (error) {
      errorHandler(error);
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

        const isError = errorHandler(res);

        if (isError) return;

        setSellerProduct(res.data);
      } catch (error) {
        errorHandler(error);
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

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));
    } catch (error) {
      errorHandler(error);

      await getNotification();
    } finally {
      setLoading({ ...loading, updateStatusProduct: false });
    }
  }

  const getWishlistProduct = useCallback(async () => {
    if (!isAuthenticated) return;

    setLoading({ ...loading, getWishlistProduct: true });
    try {
      const res = await getWishlistProductService(token);

      const isError = errorHandler(res);

      if (isError) return;

      setWishlistProduct(res.data);
    } catch (error) {
      errorHandler(error);
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

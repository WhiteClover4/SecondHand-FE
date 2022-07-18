import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  bidProductService,
  getProductService,
  getProductsService,
} from '../../services/api/product';
import { initialProduct } from '../../utils/initial';
import useError from './useError';

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
  const errorHandler = useError();

  const getProducts = useCallback(
    async (search, category) => {
      setLoading({ ...loading, getProducts: true });

      try {
        const res = await getProductsService(search, category);

        const isError = errorHandler(res);

        if (isError) return;

        setProducts(res.data);
      } catch (error) {
        errorHandler(error);
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

        const isError = errorHandler(res);

        if (isError) return;

        setProduct(res.data);
      } catch (error) {
        errorHandler(error);
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

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      closeModal();
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, bidProduct: false });
    }
  }

  return { getProducts, getProduct, products, product, bidProduct, loading };
}

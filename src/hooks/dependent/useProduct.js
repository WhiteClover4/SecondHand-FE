import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ALERT } from '../../redux/slice/alert';
import { getProductService, getProductsService } from '../../services/api/product';
import { initialProduct } from '../../utils/initial';

export default function useProduct() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [loading, setLoading] = useState({ getProducts: false, getProduct: false });

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

  return { getProducts, getProduct, products, product, loading };
}

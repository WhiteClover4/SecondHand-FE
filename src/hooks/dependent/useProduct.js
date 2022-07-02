import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  publishProductService,
  getProductService,
  getProductsService,
  draftProductService,
} from '../../services/api/product';
import { initialProduct, initialProductInput } from '../../utils/initial';

export default function useProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(initialProduct);
  const [productInput, setProductInput] = useState(initialProductInput);
  const [loading, setLoading] = useState({
    getProducts: false,
    getProduct: false,
    addProduct: false,
    draftProduct: false,
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

  const setProductInputForm = (e) =>
    setProductInput({ ...productInput, [e.target.name]: e.target.value });

  function addProductInputImage(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setProductInput({ ...productInput, images: [...productInput.images, { file, url }] });
  }

  function removeProductInputImage(targetIndex) {
    productInput.images.splice(targetIndex, 1);
    setProductInput({ ...productInput });
  }

  async function publishProduct() {
    setLoading({ ...loading, addProduct: true });
    const { name, price, category, description, images } = productInput;
    const product_pictures = images.map((image) => image.file);
    try {
      const res = await publishProductService(
        token,
        name,
        description,
        price,
        category,
        product_pictures,
      );

      if (res.status === 'error') return;

      dispatch(ADD_ALERT({ status: 'success', message: 'success add product' }));

      navigate('/seller/products');
    } catch (error) {
      console.log('error add product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, addProduct: false });
    }
  }

  async function draftProduct() {
    setLoading({ ...loading, draftProduct: true });
    const { name, price, category, description, images } = productInput;
    const product_pictures = images.map((image) => image.file);
    try {
      const res = await draftProductService(
        token,
        name,
        description,
        price,
        category,
        product_pictures,
      );

      if (res.status === 'error') return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      dispatch(ADD_ALERT({ status: 'success', message: 'success add product' }));

      navigate(
        `/seller/product/${encodeURIComponent(res.data.name)}/preview?product_id=${res.data.id}`,
      );
    } catch (error) {
      console.log('error add product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, draftProduct: false });
    }
  }

  return {
    getProducts,
    getProduct,
    products,
    product,
    productInput,
    setProductInputForm,
    addProductInputImage,
    removeProductInputImage,
    publishProduct,
    draftProduct,
    loading,
  };
}

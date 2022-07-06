import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  draftProductService,
  publishProductService,
  updateProductService,
} from '../../services/api/product';
import { initialProductInput } from '../../utils/initial';
import useQuery from '../independent/useQuery';
import useSellerProduct from './useSellerProduct';

export default function useProductInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState({
    publishProduct: false,
    draftProduct: false,
    updateProduct: false,
  });
  const [productInput, setProductInput] = useState(initialProductInput);

  const { getSellerProduct, sellerProduct } = useSellerProduct();

  const query = useQuery();
  const productId = query.get('product_id');

  const setProductInputForm = (e) =>
    setProductInput({ ...productInput, [e.target.name]: e.target.value });

  function addProductInputImage(e) {
    const file = e.target.files[0];
    const product_pictures = URL.createObjectURL(file);
    setProductInput({
      ...productInput,
      product_images: [...productInput.product_images, { file, product_pictures }],
    });
  }

  function removeProductInputImage(targetIndex) {
    productInput.product_images.splice(targetIndex, 1);
    setProductInput({ ...productInput });
  }

  async function publishProduct() {
    if (productInput.id) return updateProduct();

    setLoading({ ...loading, publishProduct: true });

    const { name, price, category, description, product_images } = productInput;
    const product_pictures = product_images.map((image) => image.file);
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

      dispatch(ADD_ALERT({ status: 'success', message: 'success publish product' }));

      navigate('/seller/products');
    } catch (error) {
      console.log('error publish product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, publishProduct: false });
    }
  }

  async function draftProduct() {
    if (productInput)
      return navigate(
        `/seller/product/${encodeURIComponent(productInput.name)}/preview?product_id=${
          productInput.id
        }`,
      );

    setLoading({ ...loading, draftProduct: true });
    const { name, price, category, description, product_images } = productInput;
    const product_pictures = product_images.map((image) => image.file);
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

      dispatch(ADD_ALERT({ status: 'success', message: 'success draft product' }));

      navigate(
        `/seller/product/${encodeURIComponent(res.data.name)}/preview?product_id=${res.data.id}`,
      );
    } catch (error) {
      console.log('error draft product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, draftProduct: false });
    }
  }

  async function updateProduct() {
    setLoading({ ...loading, updateProduct: true });
    const { name, price, category, description } = productInput;
    try {
      const res = await updateProductService(token, productId, name, description, price, category);

      if (res.status === 'error') return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      if (!res.data) return dispatch(ADD_ALERT({ status: 'error', message: res.msg }));

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));
    } catch (error) {
      console.log('error update product', error);

      dispatch(ADD_ALERT({ status: 'error', message: 'something went wrong' }));
    } finally {
      setLoading({ ...loading, updateProduct: false });
    }
  }

  useEffect(() => {
    if (!productId) return;
    getSellerProduct(productId);
  }, [productId, getSellerProduct]);

  useEffect(() => {
    if (!sellerProduct.id) return;
    const { name, id, price, category, description, product_images } = sellerProduct;
    setProductInput({ ...productInput, name, id, price, category, description, product_images });
  }, [sellerProduct]);

  return {
    loading,
    productInput,
    setProductInputForm,
    addProductInputImage,
    removeProductInputImage,
    publishProduct,
    draftProduct,
    updateProduct,
  };
}

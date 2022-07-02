import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_ALERT } from '../../redux/slice/alert';
import { publishProductService } from '../../services/api/product';
import { initialProductInput } from '../../utils/initial';

export default function useProductInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState({ publishProduct: false, draftProduct: false });
  const [productInput, setProductInput] = useState(initialProductInput);

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
    setLoading({ ...loading, publishProduct: true });
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
      setLoading({ ...loading, publishProduct: false });
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
    loading,
    productInput,
    setProductInputForm,
    addProductInputImage,
    removeProductInputImage,
    publishProduct,
    draftProduct,
  };
}

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_ALERT } from '../../redux/slice/alert';
import {
  addProductimageService,
  deleteProductImageService,
  draftProductService,
  publishProductService,
  updateProductService,
} from '../../services/api/product';
import { initialProductInput } from '../../utils/initial';
import useQuery from '../independent/useQuery';
import useError from './useError';
import useNotification from './useNotification';
import useSellerProduct from './useSellerProduct';

export default function useProductInput() {
  const { getNotification } = useNotification();
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

  const [deletelistImage, setDeletelistImage] = useState([]);

  const errorHandler = useError();

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
    const imageId = productInput.product_images[targetIndex].id;

    if (imageId) addToDeletelistImage(imageId);

    productInput.product_images.splice(targetIndex, 1);

    setProductInput({ ...productInput });
  }

  async function publishProduct() {
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

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: 'success', message: res.msg }));

      navigate('/seller/products');

      await getNotification();
    } catch (error) {
      errorHandler(error);
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

      const isError = errorHandler(res);

      if (isError) return;

      dispatch(ADD_ALERT({ status: 'success', message: 'success draft product' }));

      navigate(
        `/seller/product/${encodeURIComponent(res.data.name)}/preview?product_id=${res.data.id}`,
      );
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, draftProduct: false });
    }
  }

  async function updateProduct() {
    setLoading({ ...loading, updateProduct: true });
    const { name, price, category, description, product_images } = productInput;

    try {
      const res = await updateProductService(token, productId, name, description, price, category);

      const isError = errorHandler(res);

      if (isError) return;

      if (deletelistImage.length) {
        const fetchArr = deletelistImage.map((imageId) => deleteProductImageService(imageId));

        const resDeleted = await Promise.all(fetchArr);

        resDeleted.forEach((res) => {
          if (res.msg) dispatch(ADD_ALERT({ status: 'success', message: res.msg }));
        });
      }

      if (product_images.length) {
        const productImageWithFile = product_images
          .filter((image) => image.file)
          .map((image) => image.file);

        const resAddImage = await addProductimageService(token, productImageWithFile, productId);

        if (resAddImage.msg) dispatch(ADD_ALERT({ status: 'success', message: resAddImage.msg }));
      }

      dispatch(ADD_ALERT({ status: res.status, message: res.msg }));

      navigate(
        `/seller/product/${encodeURIComponent(res.data.name)}/preview?product_id=${res.data.id}`,
      );
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading({ ...loading, updateProduct: false });
    }
  }

  function addToDeletelistImage(imageId) {
    setDeletelistImage([...deletelistImage, imageId]);
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

import { apiStagingURL } from '../../constants/environment';

export function getProductsService(search, category) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api?q=${search || ''}&category=${category || ''}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function getProductService(productId) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/product/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function publishProductService(token, name, description, price, category, product_pictures) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append('name', name);
  formdata.append('description', description);
  formdata.append('price', price);
  formdata.append('category', category);

  product_pictures.forEach((picture) => {
    formdata.append('product_pictures', picture);
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/seller/product/publish`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function draftProductService(token, name, description, price, category, product_pictures) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append('name', name);
  formdata.append('description', description);
  formdata.append('price', price);
  formdata.append('category', category);

  product_pictures.forEach((picture) => {
    formdata.append('product_pictures', picture);
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/seller/product/preview`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function getSellerProductsService(token) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/seller`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function getSellerProductService(token, productId) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/seller/product/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

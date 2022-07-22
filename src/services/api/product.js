import { apiBaseURL } from '../../constants/environment';

export function getProductsService(search, category) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api?q=${search || ''}&category=${category || ''}`, requestOptions)
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
    fetch(`${apiBaseURL}/api/product/${productId}`, requestOptions)
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
    fetch(`${apiBaseURL}/api/seller/product/publish`, requestOptions)
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
    fetch(`${apiBaseURL}/api/seller/product/preview`, requestOptions)
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
    fetch(`${apiBaseURL}/api/seller`, requestOptions)
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
    fetch(`${apiBaseURL}/api/seller/product/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function updateProductService(token, productId, name, description, price, category) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('name', name);
  urlencoded.append('description', description);
  urlencoded.append('price', price);
  urlencoded.append('category', category);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/seller/product/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function addProductimageService(token, product_pictures, productId) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  product_pictures.forEach((file) => {
    formdata.append('product_pictures', file);
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/seller/product/image/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function deleteProductImageService(imageId) {
  var formdata = new FormData();

  var requestOptions = {
    method: 'DELETE',
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/productImage/${imageId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function updateStatusToPublishedService(token, productId) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/seller/product/publish/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function bidProductService(token, productId, bidPrice) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('offer_price', bidPrice);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/transaction/${productId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

export function getWishlistProductService(token) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiBaseURL}/api/transaction/wishlist`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

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

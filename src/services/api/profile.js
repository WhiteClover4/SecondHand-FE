import { apiStagingURL } from '../../constants/environment';

export function getProfileService(token) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/user/data`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

// export function updateProfileService(token, data) {}

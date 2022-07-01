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

export function updateProfileService(token, name, city, address, phone_number, file) {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append('name', name);
  formdata.append('city', city);
  formdata.append('address', address);
  formdata.append('phone_number', phone_number);
  formdata.append('profile_picture', file);

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(`${apiStagingURL}/api/user`, requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

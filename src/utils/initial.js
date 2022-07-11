export const initialProduct = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  status: '',
  category: '',
  seller: {
    city: '',
    name: '',
    profile_picture: '',
  },
  product_images: [],
};

export const initialProductInput = {
  id: '',
  name: '',
  price: '',
  category: '',
  description: '',
  product_images: [],
};

export const initialUserData = {
  name: '',
  email: '',
  city: '',
  address: '',
  phone_number: '',
  profile_picture: '',
  file: null,
};

export const initialTransaction = {
  id: 0,
  buyer_name: '',
  buyer_city: '',
  buyer_phone_number: '',
  buyer_profile_picture: '',
  product_name: '',
  product_price: 0,
  product_pictures: '',
  product_offer: 0,
  date: '',
  status: 'OFFERED',
};

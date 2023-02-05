import axios from 'axios';
import * as api from '../components/shared/constants';

export const addProduct = async (values) => {
  const payload = {
    Name: values.name,
    Size: values.size,
    Description: values.description,
    Price: parseFloat(values.price),
    Rating: parseInt(values.rating),
    ProductTypeId: values.category
   // Email: values.email,
   // Password: values.password,
   // ContactNumber: values.number,
   // Address: values.address
  };

  return axios.post(api.SAVE_PRODUCT_API, payload, {
    headers: {
      'Content-Type': 'application/json',
      // 'userId': storage.getItem("userId")
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}

export const addProductCategory = async (values) => {
  const payload = {
    Name: values.name
  };

  return axios.post(api.SAVE_PRODUCT_CATEGORY_API, payload, {
    headers: {
      'Content-Type': 'application/json',
      // 'userId': storage.getItem("userId")
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}

//   export const updateNews = async (values, id) => {

//     const newsViewModel = {
//       NewsId: id,
//       Title: values.title,
//       Description: values.description,
//       Embargo: values.embargoDate,
//       ExpiryDate: values.expiryDate
//     };
//     return axios.post(api.ADD_NEWS_API, newsViewModel, {
//       headers: {
//         'Content-Type': 'application/json',
//         'userId': storage.getItem("userId"),
//         'pharmacyId': storage.getItem("pharmacyId"),
//         'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
//       }
//     })
//       .then(response => response.data)
//       .catch(error => error.response);
//   }

export const getProducts = async () => {

  return axios.get(api.GET_PRODUCTS_API, {
    headers: {
      'Content-Type': 'application/json',
      // 'userId': storage.getItem("userId")
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}

export const getProductsCategory = async () => {

  return axios.get(api.GET_PRODUCTS_CATEGORY_API, {
    headers: {
      'Content-Type': 'application/json',
      // 'userId': storage.getItem("userId")
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}
//   export const getNewsById = async (newsId) => {

//     return axios.get(api.GET_NEWS_API, {
//       headers: {
//         'Content-Type': 'application/json',
//         'userId': storage.getItem("userId"),
//         'pharmacyId': storage.getItem("pharmacyId"),
//         'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
//       },params :{
//         'id':newsId
//       }
//     })
//       .then(response => response.data)
//       .catch(error => error.response);
//   }

export const deleteProduct = async (id) => {

  const HEADERS = {
    'Content-Type': 'application/json',
    //  'userId': storage.getItem("userId")
  }

  return axios.delete(api.DELETE_PRODUCT_API, {
    headers: HEADERS, params: {
      'id': id
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}

export const deleteProductCategory = async (id) => {

  const HEADERS = {
    'Content-Type': 'application/json',
    //  'userId': storage.getItem("userId")
  }

  return axios.delete(api.DELETE_PRODUCT_CATEGROY_API, {
    headers: HEADERS, params: {
      'id': id
    }
  })
    .then(response => response.data)
    .catch(error => error.response);
}
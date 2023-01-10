import axios from 'axios';
import * as api from '../components/shared/constants';

export const addNews = async (values) => {
  debugger;
    const payload = {
      Name: values.title,
     // Image: values.image,
      Description: values.description,
     // NewsDate: values.date
    };
  
    return axios.post(api.SAVE_NEWS_API, payload, {
      headers: {
        'Content-Type': 'application/json',
        // 'userId': storage.getItem("userId"),
        // 'pharmacyId': storage.getItem("pharmacyId"),
        // 'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
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
  
  export const getNews = async () => {
  
    return axios.get(api.GET_NEWS_API, {
      headers: {
        'Content-Type': 'application/json',
       // 'userId': storage.getItem("userId"),
        //'pharmacyId': storage.getItem("pharmacyId"),
       // 'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
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
  
//   export const deleteNews = async (id) => {
  
//     const HEADERS = {
//       'Content-Type': 'application/json',
//       'userId': storage.getItem("userId"),
//       'pharmacyId': storage.getItem("pharmacyId"),
//       'Ocp-Apim-Subscription-Key': appConfig.SUBR_KEY,
//     }
  
//     return axios.delete(api.DELETE_NEWS_API, {
//       headers: HEADERS, params: {
//         'id': id
//       }
//     })
//       .then(response => response.data)
//       .catch(error => error.response);
//   }
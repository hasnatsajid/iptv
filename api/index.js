import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// const API = axios.create({ baseURL: 'https://iptv-backend.hassuu.com' });

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

export const doPayment = (data) => API.post('/payment', data);

export const sendEmail = (data) => API.post('/sendmail', data);

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const userRegister = user => {
  const response = axios.post('/users/signup', user);
  return response;
};

export const userLogin = user => {
  const response = axios.post('/users/login', user);
  return response;
};

export const userLogout = user => {
  const response = axios.post('/users/logout', user);
  return response;
};

export const userCurrent = () => {
  const response = axios.get('/users/current');
  return response;
};

export const fetchContacts = () => {
  const response = axios.get('/contacts');
  return response;
};

export const addContact = contact => {
  const response = axios.post('/contacts', contact);
  return response;
};

export const deleteContact = id => {
  axios.delete(`/contacts/${id}`);
  return id;
};

import axios from 'axios';
const API_URL = 'http://localhost:3000/api/v1/';

const registerUser = (firstName, lastName, email, phoneNumber, password) => {
  return axios.post(API_URL + '/signup', {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  });
};

const login = async (email, password) => {
  const response = await axios.post(API_URL + '/login', {
    email,
    password,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_GRANT_TYPE,
  });
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = { login, logout, registerUser };

export default authService;

import axios from 'axios';

const basePath = 'http://dummy.restapiexample.com/api/v1/';

export const getEmployees = async () => {
  return axios.get(`${basePath}employees`);
};

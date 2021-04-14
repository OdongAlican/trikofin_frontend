/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const baseUrl = 'https://tricoapi.azurewebsites.net';

export const FetchIndividualCustomersRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`);
  return response;
};

export const PostIndividualCustomersRequest = async (method, data, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

export const GetIndividualCustomersRequest = async (method, path) => {
  const response = await axios[method](`${baseUrl}/${path}`);
  return response;
};

export const UpdateIndividualCustomersRequest = async (method, data, path) => {
  const response = await axios[method](`${baseUrl}/${path}`, data);
  return response;
};

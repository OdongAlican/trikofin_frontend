import axios from 'axios';

const baseUrl = 'https://tricoapi.azurewebsites.net';

export const FetchIndividualCustomersRequest = async (method, path) => {
    const response = await axios[method](`${baseUrl}/${path}`);
    return response;
};
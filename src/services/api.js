import axios from 'axios';

export const api = () => {
   const _baseUrl = 'https://api.lenzaos.com/';

   const _getRequestConig = {
      method: 'GET',
      baseURL: _baseUrl,
      headers: { accept: 'application/json', version: '0.0' },
      params: {
         chat_id: null,
      },
   };

   const apiRequest = axios.create(_getRequestConig);

   return { apiRequest };
};

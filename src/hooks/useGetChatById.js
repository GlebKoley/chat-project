import { api } from '../services/api';

export const useGetChatById = () => {
   const { apiRequest } = api();

   const getChatById = async (id) => {
      return await apiRequest
         .get('message.get', {
            params: {
               chat_id: id,
            },
         })
         .then((result) => result.data.response.sort((a, b) => a.created_at > b.created_at));
   };
   return { getChatById };
};

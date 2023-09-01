import { api } from '../services/api';
import { useCallback } from 'react';

export const useGetChatList = () => {
   const { apiRequest } = api();

   const getChatList = useCallback(async () => {
      return await apiRequest.get('chat.get').then((result) => result.data.response.sort((a, b) => a.created_at < b.created_at));
   }, []);
   return { getChatList };
};

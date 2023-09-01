export const chatListFetching = () => {
   return {
      type: 'CHAT_LIST_FETCHING',
   };
};

export const chatListFetchedDone = (chatList) => {
   return {
      type: 'CHAT_LIST_FETCHED_DONE',
      payload: chatList,
   };
};

export const setCurrentChatId = (id) => {
   return {
      type: 'SET_CURRENT_CHAT_ID',
      payload: id,
   };
};

export const setCurrentChatTitle = (chatTitle) => {
   return {
      type: 'SET_CURRENT_CHAT_TITLE',
      payload: chatTitle,
   };
};

export const setCurrentChatDate = (date) => {
   return {
      type: 'SET_CURRENT_CHAT_DATE',
      payload: date,
   };
};

export const chatByIdFetching = () => {
   return {
      type: 'CHAT_BY_ID_FETCHING',
   };
};

export const chatByIdFetchedDone = (currentChat) => {
   return {
      type: 'CHAT_BY_ID_FETCHING_FETCHED_DONE',
      payload: currentChat,
   };
};

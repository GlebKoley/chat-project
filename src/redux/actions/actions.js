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

export const currentActiveChatFetching = () => {
   return {
      type: 'CURRENT_ACTIVE_CHAT_FETCHING',
   };
};

export const currentActiveChatFetchedDone = (currentChat) => {
   return {
      type: 'CURRENT_ACTIVE_CHAT_FETCHED_DONE',
      payload: currentChat,
   };
};

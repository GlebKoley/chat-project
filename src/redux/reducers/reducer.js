const initialState = {
   chatList: [],
   currentActiveChat: [],
   currentChatId: null,
   currentChatDate: null,
   currentChatTitle: 'Please select chat',
   chatListLoadingStatus: 'false',
   currentActiveChatLoadingStatus: 'false',
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'CHAT_LIST_FETCHING':
         return {
            ...state,
            chatListLoadingStatus: 'loading',
         };
      case 'CHAT_LIST_FETCHED_DONE':
         return {
            ...state,
            chatList: action.payload,
            chatListLoadingStatus: 'false',
         };
      case 'SET_CURRENT_CHAT_ID':
         return {
            ...state,
            currentChatId: action.payload,
         };
      case 'SET_CURRENT_CHAT_TITLE':
         return {
            ...state,
            currentChatTitle: action.payload,
         };
      case 'SET_CURRENT_CHAT_DATE':
         return {
            ...state,
            currentChatDate: action.payload,
         };
      // case 'HEROES_FETCHING_ERROR':
      //    return {
      //       ...state,
      //       heroesLoadingStatus: 'error',
      //    };

      case 'CHAT_BY_ID_FETCHING':
         return {
            ...state,
            currentActiveChatLoadingStatus: 'loading',
         };
      case 'CHAT_BY_ID_FETCHING_FETCHED_DONE':
         return {
            ...state,
            currentActiveChat: action.payload,
            currentActiveChatLoadingStatus: 'false',
         };
      // case 'FILTERS_FETCHING_ERROR':
      //    return {
      //       ...state,
      //       filtersLoadingStatus: 'error',
      //    };

      default:
         return state;
   }
};

export default reducer;

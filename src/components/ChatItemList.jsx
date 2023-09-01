import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetChatList } from '../hooks/useGetChatList';

import { chatListFetching, chatListFetchedDone, setCurrentChatId, setCurrentChatTitle, setCurrentChatDate } from '../redux/actions/actions';
import { _transformChatTime } from '../utils/formatDate';

const ChatItemList = () => {
   const { chatList, chatListLoadingStatus, currentChatId } = useSelector((state) => state);
   const dispatch = useDispatch();
   const { getChatList } = useGetChatList();

   useEffect(() => {
      dispatch(chatListFetching());
      getChatList().then((data) => dispatch(chatListFetchedDone(data)));
   }, []);

   if (chatListLoadingStatus === 'loading') return <p>Loading...</p>;

   return (
      <ul className="sticky bottom-0-0 max-h-screen overflow-y-scroll shadow-chatListShadow border-r-[1px] pl-4">
         <li>
            {chatList.map((item) => {
               if (item.created_at) {
                  return (
                     <View
                        onClick={() => {
                           if (currentChatId === item.id) return;
                           dispatch(setCurrentChatId(item.id));
                           dispatch(setCurrentChatTitle(item.title));
                           dispatch(setCurrentChatDate(item.created_at));
                        }}
                        key={item.id}
                        avatar={item.avatar}
                        title={item.title}
                        message={item['last_message']['message']}
                        time={_transformChatTime(item.created_at)}
                        selected={currentChatId === item.id ? true : false}></View>
                  );
               }
            })}
         </li>
      </ul>
   );
};

export { ChatItemList };

const View = ({ title, avatar, message, time, onClick, selected }) => {
   return (
      <div
         onClick={onClick}
         className={`flex gap-4 items-center py-[15px] h-[72px] cursor-pointer hover:bg-bgColorHoverChat ${selected ? 'bg-bgColorActiveChat' : ''}`}>
         <img src={avatar} alt="Profile image" className="w-12 h-12 rounded"></img>
         <div className="flex flex-col items-start gap-[2px] flex-[1_0_0] relative break-all overflow-hidden text-ellipsis pr-[15px]">
            <p className="font-bold w-[89%] whitespace-nowrap text-ellipsis overflow-hidden capitalize">{title}</p>
            <span className="absolute right-[15px] top-0 text-[13px] text-colorChats">{time}</span>
            <span className="text-colorChats max-h-5 w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{message}</span>
         </div>
      </div>
   );
};

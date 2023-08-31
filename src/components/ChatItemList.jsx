import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chatListFetchedDone, chatListFetching, setCurrentChatId, setCurrentChatTitle } from '../redux/actions/actions';

const ChatItemList = () => {
   const { chatList, chatListLoadingStatus } = useSelector((state) => state);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(chatListFetching());

      const getData = async () => {
         const request = await fetch('https://api.lenzaos.com/chat.get?offset=0&limit=100', {
            method: 'GET',
            headers: {
               accept: 'application/json',
               version: '0.0',
            },
         });

         // return await request.json().then((data) => setChat(data.response.sort((a, b) => a.created_at < b.created_at)));
         return await request.json().then((data) => dispatch(chatListFetchedDone(data.response.sort((a, b) => a.created_at < b.created_at))));
      };
      getData();
   }, []);

   if (chatListLoadingStatus === 'loading') return <p>Loading...</p>;

   const transformChatDate = (date) => {
      const parseDate = new Date(date);
      return `${parseDate.getUTCHours().toString()}:${parseDate.getUTCMinutes().toString()}`;
   };

   return (
      <ul className="sticky bottom-0-0 max-h-screen overflow-y-scroll shadow-chatListShadow border-r-[1px] pl-4">
         <li>
            {chatList.map((item) => {
               if (item.created_at) {
                  return (
                     <View
                        onClick={() => {
                           dispatch(setCurrentChatId(item.id));
                           dispatch(setCurrentChatTitle(item.title));
                        }}
                        key={item.id}
                        avatar={item.avatar}
                        title={item.title}
                        surname={item['last_message']['user_surname']}
                        message={item['last_message']['message']}
                        time={transformChatDate(item.created_at)}></View>
                  );
               }
            })}
         </li>
      </ul>
   );
};

export { ChatItemList };

const View = ({ title, avatar, message, time, onClick }) => {
   return (
      <div onClick={onClick} className="flex gap-4 items-center py-[15px] h-[72px] cursor-pointer hover:bg-bgColorHoverChat">
         <img src={avatar} alt="Profile image" className="w-12 h-12 rounded"></img>
         <div className="flex flex-col items-start gap-[2px] flex-[1_0_0] relative break-all overflow-hidden text-ellipsis pr-[15px]">
            <p className="font-bold w-[89%] whitespace-nowrap text-ellipsis overflow-hidden capitalize   ">{title}</p>
            <span className="absolute right-[15px] top-0 text-[13px] text-colorChats">{time}</span>
            <span className="text-colorChats max-h-5 w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{message}</span>
         </div>
      </div>
   );
};

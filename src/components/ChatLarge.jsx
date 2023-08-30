import { useEffect } from 'react';
import { useState } from 'react';

const ChatLarge = () => {
   const [chat, setChat] = useState([]);
   const [activeChat, setActiveChat] = useState([]);

   useEffect(() => {
      const getData = async () => {
         const request = await fetch('https://api.lenzaos.com/chat.get?offset=0&limit=100', {
            method: 'GET',
            headers: {
               accept: 'application/json',
               version: '0.0',
            },
         });

         const data = await request.json().then((data) => setChat(data.response));
      };
      getData();
   }, []);

   const getActiveChat = (id) => {
      const getData = async () => {
         const request = await fetch(`https://api.lenzaos.com/message.get?chat_id=${id}&offset=0&limit=100`, {
            method: 'GET',
            headers: {
               accept: 'application/json',
               version: '0.0',
            },
         });

         const data = await request.json();
         return data;
      };
      getData().then((data) => {
         setActiveChat(data);
      });
   };
   if (chat.length < 1) return;

   const transformChatDate = (date) => {
      const parseDate = new Date(date);
      return `${parseDate.getUTCHours().toString()}:${parseDate.getUTCMinutes().toString()}`;
   };

   return (
      <aside className="flex flex-col justify-center h-screen shadow-chatListShadow">
         <p className="text-[18px] font-bold leading-6 py-[20px] shadow-headerShadow pl-4">All chats</p>

         <ul className="sticky bottom-0-0 max-h-screen overflow-y-scroll shadow-chatListShadow border-r-[1px] pl-4">
            <li>
               {chat.map((item) => {
                  if (item.created_at) {
                     return (
                        <View
                           onClick={() => {
                              getActiveChat(item.id);
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
      </aside>
   );
};

export { ChatLarge };

const View = ({ title, avatar, message, time, onClick }) => {
   return (
      <div onClick={onClick} className="flex gap-4 items-center  py-[15px] h-[72px] cursor-pointer hover:bg-[#201f1e0a]">
         <img src={avatar} alt="Profile image" className="w-12 h-12 rounded"></img>
         <div className="flex flex-col items-start gap-[2px] flex-[1_0_0] relative break-all overflow-hidden text-ellipsis pr-[15px]">
            <p className="font-bold w-[89%] whitespace-nowrap text-ellipsis overflow-hidden">{title}</p>
            <span className="absolute right-[15px] top-0 text-[13px] text-[#605E5C]">{time}</span>
            <span className="text-[#605E5C] max-h-5 w-[100%] whitespace-nowrap text-ellipsis overflow-hidden">{message}</span>
         </div>
      </div>
   );
};

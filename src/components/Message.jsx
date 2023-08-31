import ReadMessageIcon from '../assets/Read-message-icon.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Message = () => {
   const [chat, setChat] = useState([]);
   const chatId = useSelector((state) => state.currentChatId);

   useEffect(() => {
      if (chatId === null) return;
      const getData = async () => {
         const request = await fetch(`https://api.lenzaos.com/message.get?chat_id=${chatId}&offset=0&limit=100`, {
            method: 'GET',
            headers: {
               accept: 'application/json',
               version: '0.0',
            },
         });

         return await request.json().then((data) => setChat(data.response));
      };
      getData();
   }, [chatId]);

   if (chat.length < 1) return;

   const transformChatDate = (date) => {
      const parseDate = new Date(date);
      return `${parseDate.getUTCHours().toString()}:${parseDate.getUTCMinutes().toString()}`;
   };

   return (
      <div className="flex flex-col gap-[12px] px-[24px] overflow-y-scroll">
         <Time />
         {chat.map((person) => {
            return (
               <MessageType
                  key={person.id}
                  isMyMessage={person.user.you === true ? true : false}
                  messageText={person.message}
                  personName={person.user.name + ' ' + person.user.surname}
                  avatar={person.user.avatar}
                  time={transformChatDate(person.created_at)}
               />
            );
         })}
      </div>
   );
};

export { Message };

const Time = () => {
   return (
      <div className="inline-flex justify-center items-center">
         <span className=" rounded-[4px] px-[12px] py-[8px] font-normal leading-4 text-[14px] color-[#201F1E] not-italic bg-bgColorMessageTime">
            11.02.2021
         </span>
      </div>
   );
};

const MessageType = ({ isMyMessage, messageText, personName, avatar, time }) => {
   let classesFlex = isMyMessage === true ? 'justify-end' : 'justify-start';
   let classesBgColor = isMyMessage === true ? 'bg-bgColorMyMessage' : 'bg-bgColorAnswerUser';

   return (
      <div className={`flex gap-[8px] ${classesFlex}`}>
         {isMyMessage === false && (
            <div id="user_avatar" className="shrink-0">
               <img className="mt-[2px] rounded-[4px] w-12" src={avatar} alt="Avatar image"></img>
            </div>
         )}
         <div className={`flex flex-col gap-[4px] ${isMyMessage === false ? 'max-w-[42%]' : 'max-w-[46%]'}`}>
            {isMyMessage === false && <span className="text-[15px] font-bold">{personName}</span>}
            <div className={`inline-flex flex-row gap-[12px] py-[8px] px-[12px] items-end rounded-[4px] ${classesBgColor}`}>
               <p className="text-colorTextMessage">{messageText}</p>
               <div className="flex flex-row gap-[2px] text-colorChats">
                  <span className="text-[14px]">{time}</span>
                  <img className="max-w-none" src={ReadMessageIcon} alt="Read message icon" />
               </div>
            </div>
            {/* <div id="second_comment">
               <div className={`inline-flex justify-between flex-row gap-[12px] py-[8px] px-[12px] items-end rounded-[4px] ${classesBgColor}`}>
                  <p className="text-colorTextMessage break-all">{messageText}</p>
                  <div className="flex flex-row gap-[2px] text-colorChats">
                     <span className="text-[14px]">21:31</span>
                     <img className="max-w-none" src={ReadMessageIcon} alt="Read message icon" />
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   );
};

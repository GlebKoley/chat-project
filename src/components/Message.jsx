import ReadMessageIcon from '../assets/Read-message-icon.svg';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetChatById } from '../hooks/useGetChatById';

import { chatByIdFetching, chatByIdFetchedDone } from '../redux/actions/actions';
import { _transformChatTime, _transformChatDate } from '../utils/formatDate';

const Message = () => {
   const { currentChatId, currentActiveChat, currentChatDate } = useSelector((state) => state);
   const dispatch = useDispatch();
   const { getChatById } = useGetChatById();

   useEffect(() => {
      if (currentChatId === null) return;

      dispatch(chatByIdFetching());
      getChatById(currentChatId).then((data) => dispatch(chatByIdFetchedDone(data)));
   }, [currentChatId]);

   if (currentActiveChat.length < 1) return <p>Loading...</p>;

   return (
      <div className="flex flex-col gap-[12px] overflow-y-scroll mt-[16px]">
         {currentActiveChat.map((person) => {
            console.log(person);
            return (
               <>
                  <Time currentChatDate={_transformChatDate(person.created_at) === currentChatDate ? null : _transformChatDate(person.created_at)} />
                  {/* <p className="text-5xl">{_transformChatDate(person.created_at)}</p> */}
                  {person.is_new === true ? <NewMessage /> : ''}
                  <MessageType
                     key={person.id}
                     isMyMessage={person.user.you === true ? true : false}
                     messageText={person.message}
                     personName={person.user.name + ' ' + person.user.surname}
                     avatar={person.user.avatar}
                     time={_transformChatTime(person.created_at)}
                  />
               </>
            );
         })}
      </div>
   );
};

export { Message };

const NewMessage = () => {
   return (
      <div className="bg-bgColorActiveChat  py-1 px-3 text-center">
         <span className="text-[#407EC9] leading-4 text-[14px]">Новые сообщения</span>
      </div>
   );
};

const Time = ({ currentChatDate }) => {
   return (
      <div className="inline-flex justify-center items-center">
         <span className=" rounded-[4px] px-[12px] py-[8px] font-normal leading-4 text-[14px] color-[#201F1E] not-italic bg-bgColorMessageTime">
            {currentChatDate}
         </span>
      </div>
   );
};

const MessageType = ({ isMyMessage, messageText, personName, avatar, time }) => {
   let classesFlex = isMyMessage === true ? 'justify-end' : 'justify-start';
   let classesBgColor = isMyMessage === true ? 'bg-bgColorMyMessage' : 'bg-bgColorAnswerUser';

   return (
      <div className={`flex px-4 gap-[8px] ${classesFlex}`}>
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

import ReadMessageIcon from '../assets/Read-message-icon.svg';
import CommonPng from '../assets/Placeholder 48.png';
const Message = () => {
   return (
      <main>
         <div className="px-[24px] flex flex-col gap-[12px] ">
            <Time />
            <MessageType isMyMessage={false} />
            <MessageType isMyMessage={true} />
            <MessageType isMyMessage={true} />
            <MessageType isMyMessage={false} />
         </div>
      </main>
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

const MessageType = ({ isMyMessage }) => {
   let classesFlex = isMyMessage === true ? 'justify-end' : 'justify-start';
   let classesBgColor = isMyMessage === true ? 'bgColorMyMessage' : 'bgColorAnswerUser';

   if (isMyMessage === false) {
      return (
         <div className="flex gap-[8px]">
            <div className="shrink-0">
               <img className="mt-[2px] rounded-[4px]" src={CommonPng} alt="Avatar image"></img>
            </div>

            <div className={`flex flex-col ${classesFlex} gap-[4px] max-w-[46%]`}>
               <span className="text-[15px] font-bold">Alex Santiago</span>
               <SecondComment classesBgColor={classesBgColor} text={'dwwwwwwwwwwwwwwwwwwwwwwwwwdawdawadwwwwwwwwwwwwwwwwwwwwwwwwwdawdawadwwwwwww'} />
               <SecondComment classesBgColor={classesBgColor} text={'dwwwwwwwwwwwwwwwwwwww'} />
            </div>
         </div>
      );
   }

   return (
      <>
         <div className={`flex ${classesFlex}`}>
            <div className="max-w-[50%]">
               <div className={`inline-flex justify-end flex-row gap-[12px] py-[8px] px-[12px] bg-${classesBgColor} items-end rounded-[4px] `}>
                  <p className="text-colorTextMessage">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  <div className="flex flex-row gap-[2px] text-colorChats ">
                     <span className="text-[14px]">21:31</span>
                     <img className="max-w-none" src={ReadMessageIcon} alt="Read message icon" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

const SecondComment = ({ classesBgColor, text }) => {
   return (
      <div className="">
         <div className={`inline-flex justify-between flex-row gap-[12px] py-[8px] px-[12px] bg-${classesBgColor} items-end rounded-[4px]`}>
            <p className="text-colorTextMessage break-all">{text}</p>
            <div className="flex flex-row gap-[2px] text-colorChats ">
               <span className="text-[14px]">21:31</span>
               <img className="max-w-none" src={ReadMessageIcon} alt="Read message icon" />
            </div>
         </div>
      </div>
   );
};

import headerChatIcon from '../assets//header-chat-icon.svg';

const Header = () => {
   //shadow-[inset_0px_-1px_0px_0px_rgba(32,31,30,0.12)]
   return (
      <div className="flex gap-[10px] py-[20px] pl-[16px] shadow-headerShadow">
         <img src={headerChatIcon} alt="Chat icon image"></img>
         <p className="inline-block text-[18px] font-bold leading-6">Great Project</p>
      </div>
   );
};

export { Header };

import headerChatIcon from '../assets//header-chat-icon.svg';

const Header = () => {
   return (
      <div className="flex gap-[10px] py-[20px] pl-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
         <img src={headerChatIcon} alt="Chat icon image"></img>
         <p className="inline-block text-[18px] font-bold leading-6">Great Project</p>
      </div>
   );
};

export { Header };

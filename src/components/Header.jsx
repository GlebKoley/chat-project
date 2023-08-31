import headerChatIcon from '../assets//header-chat-icon.svg';
import { useSelector } from 'react-redux';

const Header = () => {
   const chatTitle = useSelector((state) => state.currentChatTitle);
   return (
      <header className="flex gap-[10px] py-[20px] pl-[16px] shadow-headerShadow">
         <img src={headerChatIcon} alt="Chat icon image"></img>
         <p className="inline-block text-[18px] font-bold leading-6">{chatTitle}</p>
         <button className=" bg-slate-400 rounded-[8px]">SWITCH</button>
      </header>
   );
};

export { Header };

import headerChatIcon from '../assets//header-chat-icon.svg';
import { useSelector } from 'react-redux';

const Header = () => {
   const chatTitle = useSelector((state) => state.currentChatTitle);
   return (
      <header className="flex justify-start gap-[10px] py-[20px] pl-[16px] shadow-headerShadow">
         <img src={headerChatIcon} alt="Chat icon image flex-[1_0_0]"></img>
         <p className="inline-block text-[18px] font-bold leading-6">{chatTitle}</p>
         <button className=" bg-slate-400 rounded-[8px] ml-auto mr-[20px]">SWITCH</button>
      </header>
   );
};

export { Header };

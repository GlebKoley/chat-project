import { Header } from './Header';
import { ChatItemList } from './ChatItemList';
import { Message } from './Message';
import { Input } from './Input';

import { useSelector } from 'react-redux';

function App() {
   const activeChat = useSelector((state) => state.currentChatId);

   return (
      <div className="grid grid-cols-[25%_75%] columns-rev">
         <div className="order-2 flex flex-col max-h-screen overflow-y-scroll">
            <Header />
            {!!activeChat && (
               <main className="flex flex-col gap-[16px] w-full max-w-full overflow-y-scroll h-full justify-end">
                  <Message />
                  <Input />
               </main>
            )}
         </div>
         <aside className="flex flex-col h-screen shadow-chatListShadow">
            <p className="text-[18px] font-bold leading-6 py-[20px] shadow-headerShadow pl-4">All chats</p>
            <ChatItemList className="order-1" />
         </aside>
      </div>
   );
}

export default App;

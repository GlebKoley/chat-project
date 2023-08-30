import { Header } from './Header';
import { ChatItemList } from './ChatItemList';
import { Message } from './Message';

function App() {
   return (
      <div className="grid grid-cols-[25%_75%] columns-rev">
         <div className="order-2 flex flex-col">
            <Header />
            <Message />
         </div>
         <ChatItemList className="order-1" />
      </div>
   );
}

export default App;

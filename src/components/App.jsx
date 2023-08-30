import { Header } from './Header';
import { ChatLarge } from './ChatLarge';
import { MessageArea } from './MessageArea';

function App() {
   return (
      <div className="grid grid-cols-[25%_75%] columns-rev">
         <header className="order-2">
            <Header />
         </header>
         <ChatLarge className="order-1" />
      </div>
   );
}

export default App;

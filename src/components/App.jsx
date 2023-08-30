import { Header } from './Header';
import { ChatLarge } from './ChatLarge';
import { MessageArea } from './MessageArea';

function App() {
   // .container {  display: grid;
   //    grid-template-columns: 0.5fr 1.5fr;
   //    grid-template-rows: 1fr;
   //    grid-auto-columns: auto 1fr 1fr;
   //    gap: 0px 0px;
   //    grid-auto-flow: row;
   //    justify-content: start;
   //    align-content: center;
   //    justify-items: stretch;
   //    align-items: stretch;
   //    grid-template-areas:
   //      ". .";
   //  }

   return (
      <div className="grid grid-cols-[25%_75%] columns-rev">
         <header className="order-2">
            <Header />
         </header>
         {/* <p className="h-screen">dadawdawd</p>
         <p>dadawdawd</p> */}
         <ChatLarge className="order-1" />
      </div>
      // <div className="flex flex-row">
      //    <div className="max-w-full flex flex-row-reverse justify-center m-auto">
      //       <header className="basis-3/4">
      //          <Header />
      //       </header>
      //    </div>
      //    <div>
      //       <main className="basis-1/4 break-all">
      //          <ChatLarge></ChatLarge>
      //          {/* <MessageArea /> */}
      //          {/* <ChatInput /> */}
      //       </main>
      //    </div>
      // </div>
   );
}

export default App;

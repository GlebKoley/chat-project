import IconAddFile from '../assets/Icon Add File.svg';
import IconSendMessage from '../assets/Icon Send Message.svg';

const Input = () => {
   return (
      <div className="flex items-center py-[16px] pl-[24px] pr-[5px] bg-white sticky bottom-0 right-0 border-t-[1px] h-[100px]">
         <form className="w-full flex flex-row justify-between gap-2">
            <div className="relative w-[inherit]">
               <input
                  type="text"
                  placeholder="Type messsage"
                  className="w-full rounded-[4px] border-[1px] py-[10px] px-[16px] outline outline-[1px] outline-slate-600 hover:outline-[2px] focus:outline-[2px]"
               />
               <button className="absolute top-[7px] right-[7px]">
                  <img src={IconAddFile} alt="Icon Add File" />
               </button>
            </div>
            <div>
               <button type="submit">
                  <img src={IconSendMessage} alt="Icon Send Message" className="h-[46px]" />
               </button>
            </div>
         </form>
      </div>
   );
};

export { Input };

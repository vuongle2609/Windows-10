import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const NotePad = () => {
  const {
    setChrome
  } = useStore();
  
  return (
    <WindowsBase name="Chrome" resizer="chrome" appClose={setChrome} num={0}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="border-b-[1px] border-gray-300 flex items-center py-1 px-2">
          <i className="fa-regular fa-arrow-left px-2 "></i>
          <i className="fa-regular fa-arrow-right px-2 "></i>
          <i className="fa-regular fa-arrow-rotate-right px-2 "></i>
          <div className="flex-1 relative px-2 ">
            <input
              type="text"
              className="w-full rounded-full pl-9 outline-blue-600 bg-gray-100 text-sm py-1 h-[30px]"
              placeholder="Search Google or type a URL"
            />
            <i className=" px-2 fa-regular fa-magnifying-glass absolute text-sm left-3 top-[50%] -translate-y-[50%]"></i>
          </div>
          <i className="px-2 fa-regular fa-ellipsis-vertical"></i>
        </div>
        <div className="w-full flex-1 bg-red-200">
        <iframe src="https://youtube.com/embed/dQw4w9WgXcQ" allowfullscreen className="w-full h-full"></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default NotePad;

import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const NotePad = () => {
  const { setNotePad } = useStore();

  return (
    <WindowsBase
      name="Untitled - Notepad"
      resizer="notePad"
      appClose={setNotePad}
      num={2}
    >
      <div className="w-full h-full bg-white flex flex-col">
        <div className="border-b-[1px] border-black flex text-[12px] h-[20px]">
          <div className="px-[7px] h-full">File</div>
          <div className="px-[7px] h-full">Edit</div>
          <div className="px-[7px] h-full">Format</div>
          <div className="px-[7px] h-full">View</div>
          <div className="px-[7px] h-full">Help</div>
        </div>
        <textarea
          type="text"
          className="flex-1 w-full outline-none resize-none px-1"
        ></textarea>
      </div>
    </WindowsBase>
  );
};

export default NotePad;

import TaskbarMenu from "./TaskbarMenu";
import useStore from "../store";
import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png"
const Taskbar = () => {
  const { setMenuOpen, menuOpen } = useStore();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-[40px] bg-lightMode dark:bg-darkMode flex z-99999">
        <div
          className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200"
          onClick={setMenuOpen}
        >
          <i class="fa-brands fa-windows text-[20px]"></i>
        </div>
        {/* <div className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200">
          <i class="fa-regular fa-magnifying-glass reve"></i>
        </div> */}
        <div
          className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200 p-2"
        >
          <img src={chrome} alt="" className="w-full h-full" />
        </div>
        <div
          className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200 p-2"
        >
          <img src={vscode} alt="" className="w-full h-full" />
        </div>
        <div
          className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200 p-2"
        >
          <img src={notepad} alt="" className="w-auto h-full" />
        </div>
      </div>
      <TaskbarMenu />
    </>
  );
};

export default Taskbar;

import TaskbarMenu from "./TaskbarMenu";
import useStore from "../store";
import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png";
import krunker from "../assets/icon_windows/Trigger.PNG.png";
import minecraft from "../assets/icon_windows/minecraft-1.svg";
import movie from "../assets/icon_windows/icon-for-movie-1.jpg";
import manga from "../assets/icon_windows/manga-icon-0.jpg";

const Taskbar = () => {
  const { setMenuOpen, appN } = useStore();

  const iconArr = [chrome, vscode, notepad, krunker, minecraft, movie, manga];

  const handleMinimize = () => {
    const window = document.querySelector(".react-draggable");

    const isMinimize = window.classList.contains("hidden");

    if (isMinimize) {
      window.classList.remove("hidden");
      return;
    }
    window.classList.add("hidden");
  };

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

        {appN || appN === 0 ? (
          <div
            className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200 p-2"
            onClick={handleMinimize}
          >
            <img src={iconArr[appN]} alt="" className="w-full h-full" />
          </div>
        ) : (
          false
        )}
      </div>
      <TaskbarMenu />
    </>
  );
};

export default Taskbar;

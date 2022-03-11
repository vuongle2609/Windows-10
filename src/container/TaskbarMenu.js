import useStore from "../store";

import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png";
import krunker from "../assets/icon_windows/Trigger.PNG.png";
import minecraft from "../assets/icon_windows/minecraft-1.svg";
import movie from "../assets/icon_windows/icon-for-movie-1.jpg";
import manga from "../assets/icon_windows/manga-icon-0.jpg";
import yugioh from "../assets/icon_windows/yugioh.jpg";

const TaskbarMenuItem = ({ icon, func }) => {
  return (
    <div
      className="w-full h-[48px] flex items-center justify-center"
      onClick={func}
    >
      <i className={`fa-thin fa-${icon} font-light text-[16px]`}></i>
    </div>
  );
};

const SideBarMenu = () => {
  const { setSettings } = useStore();

  return (
    <div className="h-full bg-[#e4e4e4] flex flex-col justify-between absolute left-0 top-0 w-[48px]">
      <div>
        <TaskbarMenuItem icon="bars" />
      </div>
      <div className="flex flex-col w-full items-center text-[20px]">
        <TaskbarMenuItem icon="user" />
        <TaskbarMenuItem icon="file" />
        <TaskbarMenuItem icon="image" />
        <TaskbarMenuItem icon="gear" func={() => setSettings(true)} />
        <TaskbarMenuItem icon="power-off" />
      </div>
    </div>
  );
};

const MenuApp = (props) => {
  const { onApp, setMenuOpen } = useStore();

  const handleOpenApp = () => {
    setMenuOpen(false);
    if (!onApp) {
      props.func();
    }
  };

  return (
    <div className="flex items-center py-3 px-4" onClick={handleOpenApp}>
      <img
        src={props.icon}
        alt=""
        style={{ width: 26, height: 26 }}
        className="mr-2"
      />
      <p className="text-base">{props.name}</p>
    </div>
  );
};

const MenuApps = () => {
  const {
    setNotePad,
    setChrome,
    setVscode,
    setKrunker,
    setMinecraft,
    setAnime,
    setManga,
    setYugioh,
  } = useStore();

  return (
    <div className="w-full h-full pt-[10px] overflow-scroll settings_container">
      <MenuApp
        icon={chrome}
        name="Google Chrome"
        func={() => {
          setChrome(true);
        }}
      />
      <MenuApp
        icon={vscode}
        name="Visual Studio Code"
        func={() => {
          setVscode(true);
        }}
      />
      <MenuApp
        icon={notepad}
        name="Notepad"
        func={() => {
          setNotePad(true);
        }}
      />
      <MenuApp
        icon={krunker}
        name="Krunker.io"
        func={() => {
          setKrunker(true);
        }}
      />
      <MenuApp
        icon={minecraft}
        name="Minecraft"
        func={() => {
          setMinecraft(true);
        }}
      />
      <MenuApp
        icon={movie}
        name="Anime"
        func={() => {
          setAnime(true);
        }}
      />
      <MenuApp
        icon={manga}
        name="Manga"
        func={() => {
          setManga(true);
        }}
      />
      <MenuApp
        icon={yugioh}
        name="Yugioh Nexus"
        func={() => {
          setYugioh(true);
        }}
      />
    </div>
  );
};

const TaskbarMenu = () => {
  const { menuOpen } = useStore();

  return (
    <div
      className={
        `fixed left-0 h-1/2 flex origin-bottom-left duration-[160ms] z-[998] taskbar_menu` +
        (menuOpen ? " bottom-[40px]" : " -bottom-full")
      }
    >
      <div className="w-full h-full bg-red-200 relative">
        <SideBarMenu />
        <div className="w-[274px] h-full bg-[#e4e4e4] ml-[48px]">
          <MenuApps />
        </div>
      </div>
    </div>
  );
};

export default TaskbarMenu;

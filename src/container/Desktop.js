import Taskbar from "../components/Taskbar";
import NotePad from "../components/Apps/NotePad";
import Chrome from "../components/Apps/Chrome";
import Vscode from "../components/Apps/Vscode";
import Settings from "../components/Apps/Settings";
import Krunker from "../components/Apps/Krunker";
import Minecraft from "../components/Apps/Minecraft";
import Anime from "../components/Apps/Anime";
import Manga from "../components/Apps/Manga";
import Yugioh from "../components/Apps/Yugioh";
import useStore from "../store";
import Icons from "./Icons";
import MenuRightClick from "./../components/MenuRightClick";

const Desktop = () => {
  const {
    NotePadO,
    ChromeO,
    VscodeO,
    SettingsO,
    KrunkerO,
    MinecraftO,
    AnimeO,
    MangaO,
    YugiohO
  } = useStore();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-200 select-none">
      {NotePadO ? <NotePad /> : false}
      {ChromeO ? <Chrome /> : false}
      {VscodeO ? <Vscode /> : false}
      {SettingsO ? <Settings /> : false}
      {KrunkerO ? <Krunker /> : false}
      {MinecraftO ? <Minecraft /> : false}
      {AnimeO ? <Anime /> : false}
      {MangaO ? <Manga /> : false}
      {YugiohO ? <Yugioh /> : false}
      <Icons />
      <Taskbar />
      <MenuRightClick />
      <div className="desktop fixed top-0 bottom-0 left-0 right-0 bg-red-400 -z-[20]"></div>
    </div>
  );
};

export default Desktop;

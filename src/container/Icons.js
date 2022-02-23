import useStore from "../store";
import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png";
import krunker from "../assets/icon_windows/Trigger.PNG.png";
import minecraft from "../assets/icon_windows/minecraft-1.svg";
import movie from "../assets/icon_windows/icon-for-movie-1.jpg";
import manga from "../assets/icon_windows/manga-icon-0.jpg";

const IconBox = (props) => {
  const { icon } = useStore();

  let iconSize;
  let imgSize;
  let textSize;

  if (icon === 0) {
    iconSize = " w-[75px] mb-2 mt-2";
    imgSize = " w-[42%] h-auto";
    textSize = " line-clamp-2 min-h-[33px] text-[11px]";
  } else if (icon === 1) {
    iconSize = " w-[75px] mb-2 mt-2";
    imgSize = " w-[58%] h-auto";
    textSize = " line-clamp-2 min-h-[43px] text-[12px]";
  } else if (icon === 2) {
    iconSize = " w-[98px] mb-1 mt-2 mr-2 ml-2";
    imgSize = " w-full h-auto";
    textSize = " line-clamp-2 min-h-[39px] text-[13px]";
  }

  return (
    <div className={"flex flex-col items-center icon" + iconSize}>
      <img src={props.img} alt="" className={"icon " + imgSize} />
      <p className={"icon text-center text-white text-shadow " + textSize}>
        {props.name}
      </p>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="fixed top-0 left-0 h-[95.7%] w-fit -z-10 flex flex-col flex-wrap">
      <IconBox name="NotePad" img={notepad} />
      <IconBox name="Visual Studio Code" img={vscode} />
      <IconBox name="Google Chrome" img={chrome} />
      <IconBox name="Krunker" img={krunker} />
      <IconBox name="Minecraft" img={minecraft} />
      <IconBox name="Anime" img={movie} />
      <IconBox name="Manga" img={manga} />
    </div>
  );
};

export default Icons;

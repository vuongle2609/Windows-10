import useStore from "../store";
import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png";
import krunker from "../assets/icon_windows/Trigger.PNG.png";
import minecraft from "../assets/icon_windows/minecraft-1.svg";
import movie from "../assets/icon_windows/icon-for-movie-1.jpg";
import manga from "../assets/icon_windows/manga-icon-0.jpg";
import yugioh from "../assets/icon_windows/yugioh.jpg";

import { useEffect, useState } from "react";

const IconBox = (props) => {
  const { icon, onApp } = useStore();
  const [count, setCount] = useState(0);

  let iconSize;
  let imgSize;
  let textSize;

  const handleOpenApp = () => {
    setCount((prev) => prev + 1);

    setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 500);
  };

  useEffect(() => {
    if (count === 2) {
      if (!onApp) {
        props.func();
      }
    }
  }, [count])

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
    <div
      className={"flex flex-col items-center icon" + iconSize}
      onClick={handleOpenApp}
    >
      <img src={props.img} alt="" className={"icon " + imgSize} />
      <p className={"icon text-center text-white text-shadow " + textSize}>
        {props.name}
      </p>
    </div>
  );
};

const Icons = () => {
  const {
    showIcon,
    setNotePad,
    setChrome,
    setVscode,
    setKrunker,
    setMinecraft,
    setAnime,
    setManga,
    setYugioh,
  } = useStore();

  return showIcon ? (
    <div className="fixed top-0 left-0 h-[97%] w-fit -z-10 flex flex-col flex-wrap">
      <IconBox
        name="NotePad"
        img={notepad}
        func={() => {
          setNotePad(true);
        }}
      />
      <IconBox
        name="Visual Studio Code"
        img={vscode}
        func={() => {
          setVscode(true);
        }}
      />
      <IconBox
        name="Google Chrome"
        img={chrome}
        func={() => {
          setChrome(true);
        }}
      />
      <IconBox
        name="Krunker"
        img={krunker}
        func={() => {
          setKrunker(true);
        }}
      />
      <IconBox
        name="Minecraft"
        img={minecraft}
        func={() => {
          setMinecraft(true);
        }}
      />
      <IconBox
        name="Anime"
        img={movie}
        func={() => {
          setAnime(true);
        }}
      />
      <IconBox
        name="Manga"
        img={manga}
        func={() => {
          setManga(true);
        }}
      />
      <IconBox
        name="Yugioh Nexus"
        img={yugioh}
        func={() => {
          setYugioh(true);
        }}
      />
    </div>
  ) : (
    false
  );
};

export default Icons;

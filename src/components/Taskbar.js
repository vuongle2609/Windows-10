import TaskbarMenu from "./TaskbarMenu";
import useStore from "../store";
import chrome from "../assets/icon_windows/chrome.svg";
import vscode from "../assets/icon_windows/Visual_Studio_Code_1.35_icon.svg";
import notepad from "../assets/icon_windows/Notepad_Vista_10.png";
import krunker from "../assets/icon_windows/Trigger.PNG.png";
import minecraft from "../assets/icon_windows/minecraft-1.svg";
import movie from "../assets/icon_windows/icon-for-movie-1.jpg";
import manga from "../assets/icon_windows/manga-icon-0.jpg";
import yugioh from "../assets/icon_windows/yugioh.jpg";
import setting from "../assets/icon_windows/setting.svg";

import notif from "../assets/tray_icons/notif.svg";
import arrow from "../assets/tray_icons/arrow.svg";
import baterry from "../assets/tray_icons/baterry.svg";
import wifi from "../assets/tray_icons/wifi.svg";

import { useState } from "react";

const TrayIcon = (props) => {
  return (
    <div className="p-1">
      <img src={props.icon} alt="" />
    </div>
  );
};

const TrayClock = () => {
  const [render, setRender] = useState(false);

  setInterval(() => {
    setRender(!render);
  }, 1000);

  const time = new Date();

  const minutes = time.getMinutes();
  const hour = time.getHours();
  var year = time.getFullYear();
  var month = time.getMonth();
  var day = time.getDate();

  return (
    <div className="text-[12px] flex flex-col items-center p-[11px]">
      <p>
        {hour}:{minutes < 10 ? `0${minutes}` : minutes}{" "}
        {hour > 12 ? " pm" : " am"}
      </p>
      <p>
        {day}/{month < 10 ? `0${month}` : month}/{year}
      </p>
    </div>
  );
};

const Taskbar = () => {
  const { setMenuOpen, appN } = useStore();

  const iconArr = [
    chrome,
    vscode,
    notepad,
    krunker,
    minecraft,
    movie,
    manga,
    yugioh,
    setting
  ];

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
      <div className="fixed bottom-0 left-0 right-0 h-[40px] bg-[#eeeeee] dark:bg-darkMode flex z-[99999] justify-between items-center">
        <div className="flex">
          <div
            className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200"
            onClick={setMenuOpen}
          >
            <i class="fa-brands fa-windows text-[20px]"></i>
          </div>

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
        <div className="flex h-full items-center">
          <TrayIcon icon={arrow} />
          <TrayIcon icon={baterry} />
          <TrayIcon icon={wifi} />
          <div className="text-xs ml-[10px]">
            <p>ENG</p>
          </div>
          <TrayClock />

          <TrayIcon icon={notif} />
          <div
            className="w-[5px] border-l-[1px] border-gray-400 h-full ml-[14px]"
            onClick={handleMinimize}
          ></div>
        </div>
      </div>
      <TaskbarMenu />
    </>
  );
};

export default Taskbar;

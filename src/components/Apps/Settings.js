import WindowsBase from "./WindowsBase";
import useStore from "../../store";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import icon1 from "../../assets/settings_icons/system.svg";
import icon2 from "../../assets/settings_icons/device.svg";
import icon3 from "../../assets/settings_icons/phone.svg";
import icon4 from "../../assets/settings_icons/network.svg";
import icon5 from "../../assets/settings_icons/person.svg";
import icon6 from "../../assets/settings_icons/app.svg";
import icon7 from "../../assets/settings_icons/account.svg";
import icon8 from "../../assets/settings_icons/language.svg";
import icon9 from "../../assets/settings_icons/xbox.svg";
import icon10 from "../../assets/settings_icons/access.svg";
import icon11 from "../../assets/settings_icons/search.svg";
import icon12 from "../../assets/settings_icons/security.svg";
import icon13 from "../../assets/settings_icons/update.svg";

const SettingItem = (props) => {
  return (
    <div className={"mb-14 col " + props.size}>
      <div className="w-full flex">
        <img src={props.img} alt="" className="mr-5" />
        <div className="flex-1 flex flex-col">
          <h3 className="text-base">{props.name}</h3>
          <p className="text-sm text-[#666666]">{props.detail}</p>
        </div>
      </div>{" "}
    </div>
  );
};

const Menu = () => {
  const [size, setSize] = useState("res-1");
  const [input, setInput] = useState("input-halve");

  const myObserver = new ResizeObserver((entries) => {
    const size = entries[0].contentRect.width;

    if (size < 494) {
      setSize("res-3");
      setInput("input-full");
    } else if (size < 637) {
      setSize("res-3-5");
      setInput("input-full");
    } else if (size < 1023) {
      setSize("res-2");
      setInput("input-halve");
    } else if (size < 1267) {
      setSize("res-2-5");
      setInput("input-halve");
    } else {
      setSize("res-1");
      setInput("input-halve");
    }
  });

  useEffect(() => {
    const someEl = document.querySelector(".settings_container");
    myObserver.observe(someEl);

    document.querySelector(".search_box").focus();
  }, []);

  return (
    <>
      <h1 className="w-full text-center text-2xl py-5">Windows Settings</h1>
      <div className="grid wide">
        <div className="row justify-center mb-16">
          <div className={"col " + input}>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full h-8 border-black border-[1px] outline-red-200 pr-12 pl-3 search_box"
                placeholder="Find a setting"
              />
              <i class="fa-thin fa-magnifying-glass absolute right-4 top-[50%] -translate-y-[50%]"></i>
            </div>
          </div>
        </div>
        <div className="row settings_container">
          <SettingItem
            img={icon1}
            name="System"
            detail="Display, sound, notifications,
          power"
            size={size}
          />
          <SettingItem
            img={icon2}
            name="Devices"
            detail="Bluetooth, printers, mouse"
            size={size}
          />
          <SettingItem
            img={icon3}
            name="Phone"
            detail="Link your Android, Phone"
            size={size}
          />
          <SettingItem
            img={icon4}
            name="Network & Internet"
            detail="Wi-Fi, airplane mode, VPN"
            size={size}
          />
          <SettingItem
            img={icon5}
            name="Personalization"
            detail="Background, lock screen, colors"
            size={size}
          />
          <SettingItem
            img={icon6}
            name="Apps"
            detail="Uninstall, defaults, optional
features"
            size={size}
          />
          <SettingItem
            img={icon7}
            name="Accounts"
            detail="Your accounts, email, sync,
          work, family"
            size={size}
          />
          <SettingItem
            img={icon8}
            name="Time & Language"
            detail="Speech, region, date"
            size={size}
          />
          <SettingItem
            img={icon9}
            name="Gaming"
            detail="Xbox Game Bar, captures, Game
          Mode"
            size={size}
          />
          <SettingItem
            img={icon10}
            name="Ease of Access"
            detail="Narrator, magnifier, high
          contrast"
            size={size}
          />
          <SettingItem
            img={icon11}
            name="Search"
            detail="
          Find my files, permissions"
            size={size}
          />
          <SettingItem
            img={icon12}
            name="Privacy"
            detail="Location, camera, microphone"
            size={size}
          />
          <SettingItem
            img={icon13}
            name="Update & Security"
            detail="
          Windows Update, recovery,
          backup
          "
          />
        </div>
      </div>
    </>
  );
};

const Settings = () => {
  const { setSettings, setWallpaper } = useStore();

  return (
    <WindowsBase
      name="Settings"
      resizer="settings"
      appClose={setSettings}
      num={8}
    >
      <div className="bg-white w-full h-full">
        <Routes>
          <Route element={<Menu />} index/>
        </Routes>
      </div>
    </WindowsBase>
  );
};

export default Settings;

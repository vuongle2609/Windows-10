import WindowsBase from "./WindowsBase";
import useStore from "../../store";

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

import { useEffect, useState } from "react";
import { onResize } from "react-draggable";

const SettingItem = (props) => {
  return (
    <div className={"mb-5 col " + props.size}>
      <div className="w-full flex">
        <img src={props.img} alt="" className="" />
        <div className="flex-1 flex flex-col">
          <h3>{props.name}</h3>
          <p className="">{props.detail}</p>
        </div>
      </div>{" "}
    </div>
  );
};

const Settings = () => {
  const { setSettings, setWallpaper } = useStore();
  const [size, setSize] = useState("res-1");

  const myObserver = new ResizeObserver((entries) => {
    const size = entries[0].contentRect.width;
    if (size < 767) {
      setSize("res-3");
    } else if (size < 1023) {
      setSize("res-2");
    } else {
      setSize("res-1");
    }
  });

  useEffect(() => {
    const someEl = document.querySelector(".settings_container");
    myObserver.observe(someEl);
  }, []);

  return (
    <WindowsBase
      name="Settings"
      resizer="settings"
      appClose={setSettings}
      num={8}
    >
      <div className="bg-white w-full h-full">
        <h1 className="w-full text-center text-2xl py-5">Windows Settings</h1>
        <div className="grid wide">
          <div className="row justify-center mb-6">
            <div className="col c-4 ">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full h-8 border-black border-[1px] outline-red-200 pr-12 pl-3"
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
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon2}
              name="Devices"
              detail="test 4"
              size={size}
            />
            <SettingItem img={icon3} name="Phone" detail="test 4" size={size} />
            <SettingItem
              img={icon4}
              name="Network & Internet"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon5}
              name="Personalization"
              detail="test 4"
              size={size}
            />
            <SettingItem img={icon6} name="Apps" detail="test 4" size={size} />
            <SettingItem
              img={icon7}
              name="Accounts"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon8}
              name="Time & Language"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon9}
              name="Gaming"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon10}
              name="Ease of Access"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon11}
              name="Search"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon12}
              name="Privacy"
              detail="test 4"
              size={size}
            />
            <SettingItem
              img={icon13}
              name="Update & Security"
              detail="test 4"
            />
          </div>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Settings;

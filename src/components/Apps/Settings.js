import WindowsBase from "./WindowsBase";
import DropdownSelector from "../DropdownSelector";
import useStore from "../../store";
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

import home from "../../assets/settings_icons/p-setting/home.svg";
import background from "../../assets/settings_icons/p-setting/background.svg";
import color from "../../assets/settings_icons/p-setting/color.svg";
import font from "../../assets/settings_icons/p-setting/font.svg";
import lock from "../../assets/settings_icons/p-setting/lock.svg";
import theme from "../../assets/settings_icons/p-setting/theme.svg";
import start from "../../assets/settings_icons/p-setting/start.svg";
import taskbar from "../../assets/settings_icons/p-setting/taskbar.svg";
import corner from "../../assets/settings_icons/p-setting/windows_corner.png";

import wpp0 from "../../assets/windows_wallpaper/img0.jpg";
import wpp1 from "../../assets/windows_wallpaper/img1.jpg";
import wpp2 from "../../assets/windows_wallpaper/img2.jpg";
import wpp3 from "../../assets/windows_wallpaper/img3.jpg";
import wpp4 from "../../assets/windows_wallpaper/img4.jpg";

import { HexColorPicker } from "react-colorful";

const wppArr = [wpp0, wpp1, wpp2, wpp3, wpp4];

const SettingItem = (props) => {
  return (
    <div className={"mb-14 col " + props.size}>
      <div
        className={"w-full flex " + (props.func ? " " : " brightness-150")}
        onClick={props.func}
      >
        <img
          src={props.img}
          alt=""
          className="mr-5"
          style={{ width: 28, height: 28 }}
        />
        <div className="flex-1 flex flex-col">
          <h3 className={"text-sm " + (props.func ? " " : " text-[#666666]")}>
            {props.name}
          </h3>
          <p className="text-[12px] text-[#666666]">{props.detail}</p>
        </div>
      </div>{" "}
    </div>
  );
};

const Menu = ({ setTab }) => {
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
                className="w-full h-7 border-black border-[1px] outline-red-200 pr-12 pl-3 search_box text-sm"
                placeholder="Find a setting"
              />
              <i className="fa-thin fa-magnifying-glass absolute right-4 top-[50%] -translate-y-[50%]"></i>
            </div>
          </div>
        </div>
        <div className="row settings_container max-h-[360px] overflow-scroll overflow-x-hidden">
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
            func={() => setTab(1)}
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

const SettingSelect = (props) => {
  return (
    <div
      className="flex text-[13px] px-4 py-[12px] hover:bg-[#cfcfcf]"
      onClick={props.func}
    >
      <img src={props.icon} alt="" className="mr-3" style={{ fill: "#fff" }} />
      <p>{props.name}</p>
    </div>
  );
};

const ImagePicker = () => {
  const { setWallpaper, setPreWallpaper } = useStore();

  return (
    <div>
      <h3 className="text-xs block mb-[6px]">Choose your picture</h3>
      <div className="mt-2 flex">
        {wppArr.map((wpp, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${wpp})` }}
            className="w-[64px] h-[64px] mr-1 bg-center bg-cover"
            onClick={() => {
              setWallpaper(index);
              setPreWallpaper(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const ColorPicker = (props) => {
  const { BColor, setBColor } = useStore();

  const colorArr = [
    "#ff8c00",
    "#e81123",
    "#d13438",
    "#c30052",
    "#bf0077",
    "#9a0089",
    "#881798",
    "#744da9",
    "#10893e",
    "#107c10",
    "#018574",
    "#2d7d9a",
    "#0063b1",
    "#6b69d6",
    "#8e8cd8",
    "#8764b8",
    "#038387",
    "#486860",
    "#525e54",
    "#7e735f",
    "#4c4a48",
    "#515c6b",
    "#4a5459",
    "#000000",
  ];
  return (
    <div>
      <h3 className="text-xs block mb-[6px]">Choose your background color</h3>
      <div className="mt-2 flex w-[338px] flex-wrap">
        {colorArr.map((color, index) => (
          <div
            key={index}
            className={"basis-[12.5%] w-[12.5%] pr-[2px] pb-[2px] relative"}
          >
            <div
              className="pt-[100%] "
              style={{ backgroundColor: color }}
              onClick={() => setBColor(color)}
            ></div>
            {color === BColor ? (
              <span className="block absolute -top-[1px] -left-[1px] w-[99%] h-[99%] border-[3px] border-black">
                <span className="flex items-center justify-center w-1/2 h-1/2 absolute -top-[1px] -right-[1px] bg-black">
                  <i className="text-white fa-thin fa-check text-xs"></i>
                </span>
              </span>
            ) : (
              false
            )}
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          props.setColorTable(true);
        }}
        className="flex hover:bg-[#f2f2f2] w-[362px] p-2 mt-4 relative right-[8px]"
      >
        <span className="mr-2 bg-[#cccccc] flex items-center justify-center w-[36px] h-[36px]">
          <i className="fa-regular fa-plus"></i>
        </span>
        <p className="text-xs">Custom color</p>
      </div>
    </div>
  );
};

const ColorTable = (props) => {
  const { BColor, setBColor } = useStore();
  const [color, setColor] = useState(BColor);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-filterWhite flex items-center justify-center">
      <div className="w-[330px] p-[18px] border-[1px] border-[#cccccc] bg-white">
        <h3 className="block pb-3 text-lg">Pick a background color</h3>
        <div className="flex h-fit">
          <section className="hexcolor-small">
            <HexColorPicker color={BColor} onChange={setColor} />
          </section>
          <div
            className="ml-3 flex-1 h-[250px] "
            style={{ backgroundColor: color }}
          ></div>
        </div>
        <div className="w-full flex mt-5">
          <div
            onClick={() => {
              setBColor(color);
              props.setColorTable(false);
            }}
            className="basis-[50%] h-[30px] bg-[#cccccc] text-xs flex items-center justify-center mr-1"
          >
            Done
          </div>
          <div
            onClick={() => props.setColorTable(false)}
            className="basis-[50%] h-[30px] bg-[#cccccc] text-xs flex items-center justify-center ml-1"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonalizationSetting = (props) => {
  const { wallpaper, setWallpaper, BColor, preWallpaper } = useStore();

  return (
    <div className="w-full h-full flex">
      <div className="flex flex-1">
        <div className="w-[287px] h-auto bg-[#e6e6e6]">
          <SettingSelect icon={home} name="Home" func={() => props.setTab(0)} />
          <div className="relative w-full px-4 mt-2">
            <input
              type="text"
              className="w-full h-7 border-black border-[1px] outline-red-200 pr-12 pl-3 search_box text-sm bg-[#f0f0f0] focus:bg-white"
              placeholder="Find a setting"
            />
            <i className="fa-thin fa-magnifying-glass absolute right-7 top-[50%] -translate-y-[50%] text-xs"></i>
          </div>
          <h4 className="font-bold px-4 text-xs py-6">Personalization</h4>
          <SettingSelect icon={background} name="Background" />
          <SettingSelect icon={color} name="Colors" />
          <SettingSelect icon={lock} name="Lock screen" />
          <SettingSelect icon={theme} name="Themes" />
          <SettingSelect icon={font} name="Fonts" />
          <SettingSelect icon={start} name="Start" />
          <SettingSelect icon={taskbar} name="Taskbar" />
        </div>
        <div className="flex-1 h-auto px-5 pt-2">
          <label className="text-2xl font-thin mb-3 block">Background</label>

          <div
            className="w-[300px] h-[160px] relative bg-cover bg-center "
            style={{
              backgroundColor: BColor,
              backgroundImage: `url(${wppArr[wallpaper]})`,
            }}
          >
            <img src={corner} alt="" className="absolute bottom-0 left-0" />
          </div>
          <div className="mt-14">
            <DropdownSelector
              label="Background"
              choices={[
                {
                  name: "Picture",
                  func: () => {
                    setWallpaper(preWallpaper);
                  },
                },
                {
                  name: "Solid color",
                  func: () => {
                    setWallpaper(false);
                  },
                },
              ]}
            />
          </div>

          <div className="mt-6">
            {wallpaper || wallpaper === 0 ? (
              <ImagePicker />
            ) : (
              <ColorPicker setColorTable={props.setColorTable} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const { setSettings } = useStore();
  const [colorTable, setColorTable] = useState(false);
  const [tab, setTab] = useState(0);

  let render;
  if (tab === 0) {
    render = <Menu setTab={setTab} />;
  } else if (tab === 1) {
    render = (
      <PersonalizationSetting setColorTable={setColorTable} setTab={setTab} />
    );
  }

  return (
    <WindowsBase
      name="Settings"
      resizer="settings"
      appClose={setSettings}
      num={8}
    >
      <div className="bg-white w-full h-full relative">
        {render}
        {colorTable ? <ColorTable setColorTable={setColorTable} /> : false}
      </div>
    </WindowsBase>
  );
};

export default Settings;

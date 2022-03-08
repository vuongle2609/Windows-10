import { useState } from "react";

import planeW from "../assets/wifi_bar/white/plane.svg";
import wifiW from "../assets/wifi_bar/white/wifi.svg";
import hotspotW from "../assets/wifi_bar/white/hotspot.svg";

import planeB from "../assets/wifi_bar/dark/plane.svg";
import wifiB from "../assets/wifi_bar/dark/wifi.svg";
import hotspotB from "../assets/wifi_bar/dark/hotspot.svg";

const ActionItemsToggle = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => {
        setToggle(!toggle);
        if (props.func) props.func(!toggle);
      }}
      className={
        "w-[24%] h-[62px] mr-1 p-[6px] flex flex-col justify-between hover:brightness-110 duration-200 transition-all" +
        (toggle ? " bg-[#3e3e3e]" : " bg-[#efefef]")
      }
    >
      <img
        src={toggle ? props.iconOn : props.icon}
        alt=""
        style={{ width: 19, height: 19 }}
      />

      <p className={"text-xs" + (toggle ? " text-white" : "")}>{props.name}</p>
    </div>
  );
};

const Internet = () => {
  return (
    <div
      className="fixed right-0 bottom-[40px] w-[360px] h-fit
      bg-[#e4e4e4] pt-[12px] border-[#333333] border-l-[1px] border-t-[1px]
          shadow-md flex flex-col
      "
    >
      <div className="flex-1 bg-red-200"></div>
      <div className="p-1">
        <h2 className="text-base font-medium px-[10px]">Network & Internet settings</h2>
        <p className="text-xs font-thin mb-3 px-[10px]">
          Change settings, such as making a connection metered.
        </p>
        <div className="flex">
          <ActionItemsToggle icon={wifiB} iconOn={wifiW} name="Wi-fi" />
          <ActionItemsToggle
            icon={planeB}
            iconOn={planeW}
            name="Airplane mode"
          />
          <ActionItemsToggle
            icon={hotspotB}
            iconOn={hotspotW}
            name="Mobile hotspot"
          />
        </div>
      </div>
    </div>
  );
};

export default Internet;

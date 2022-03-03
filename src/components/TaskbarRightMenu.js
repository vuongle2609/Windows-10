import useStore from "../store";
import { useState, useRef } from "react";

import alertB from "../assets/right_menu/black/alert.svg";
import bateryB from "../assets/right_menu/black/batery.svg";
import bluetoothB from "../assets/right_menu/black/bluetooth.svg";
import connectB from "../assets/right_menu/black/connect.svg";
import hotspotB from "../assets/right_menu/black/hotspot.svg";
import locationB from "../assets/right_menu/black/location.svg";
import nearB from "../assets/right_menu/black/near.svg";
import networkB from "../assets/right_menu/black/network.svg";
import nightB from "../assets/right_menu/black/night.svg";
import planeB from "../assets/right_menu/black/plane.svg";
import projectB from "../assets/right_menu/black/project.svg";
import settingB from "../assets/right_menu/black/setting.svg";
import snipB from "../assets/right_menu/black/snip.svg";
import tabletB from "../assets/right_menu/black/tablet.svg";
import vpnB from "../assets/right_menu/black/vpn.svg";

import alertW from "../assets/right_menu/white/alert.svg";
import bluetoothW from "../assets/right_menu/white/bluetooth.svg";
import hotspotW from "../assets/right_menu/white/hotspot.svg";
import locationW from "../assets/right_menu/white/location.svg";
import nearW from "../assets/right_menu/white/near.svg";
import nightW from "../assets/right_menu/white/night.svg";
import tabletW from "../assets/right_menu/white/tablet.svg";

const ActionItems = (props) => {
  return (
    <div className="w-[24%] bg-[#efefef] h-[62px] mb-[4px] p-[6px] flex flex-col justify-between">
      <img src={props.icon} alt="" style={{ width: 19, height: 19 }} />
      <p className="text-xs">{props.name}</p>
    </div>
  );
};

const ActionItemsClick = (props) => {
  return (
    <div className="w-[24%] bg-[#efefef] h-[62px] mb-[4px] p-[6px] flex flex-col justify-between">
      <img src={props.icon} alt="" style={{ width: 19, height: 19 }} />
      <p className="text-xs">{props.name}</p>
    </div>
  );
};

const ActionItemsToggle = (props) => {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState(true);

  setTimeout(() => {
    setIcon(true);
  }, 1000);

  return (
    <div
      onClick={() => {
        setToggle(!toggle);
        setIcon(false);
      }}
      className={
        "w-[24%] h-[62px] mb-[4px] p-[6px] flex flex-col justify-between hover:brightness-110 duration-200 transition-all" +
        (toggle ? " bg-[#3e3e3e]" : " bg-[#efefef]")
      }
    >
      {icon ? (
        <img
          src={toggle ? props.iconOn : props.icon}
          alt=""
          style={{ width: 19, height: 19 }}
        />
      ) : (
        <p className={"text-xs" + (toggle ? " text-white" : "")}>
          {toggle ? "On" : "Off"}
        </p>
      )}

      <p className={"text-xs" + (toggle ? " text-white" : "")}>{props.name}</p>
    </div>
  );
};

const ActionMenu = () => {
  const [hide, setHide] = useState(true);

  return (
    <div
      className={
        "h-[440px] transition-all duration-150 " +
        (hide ? " -mb-[298px]" : " mb-0")
      }
    >
      <div className="flex justify-between w-full text-xs mb-5">
        <span onClick={() => setHide(!hide)}>
          {!hide ? "Collapse" : "Expand"}
        </span>
        <span>Clear all notifications</span>
      </div>

      <div className="w-full flex justify-between flex-wrap">
        <ActionItemsToggle
          icon={locationB}
          iconOn={locationW}
          name="Location"
        />
        <ActionItems icon={bateryB} name="Battery saver" />
        <ActionItemsToggle
          icon={bluetoothB}
          iconOn={bluetoothW}
          name="Bluetooth"
        />
        <ActionItemsToggle icon={nightB} iconOn={nightW} name="Night light" />
        <ActionItemsToggle icon={tabletB} iconOn={tabletW} name="Tablet mode" />
        <ActionItemsToggle
          icon={hotspotB}
          iconOn={hotspotW}
          name="Mobile hotspot"
        />
        <ActionItems icon={planeB} name="Airplane mode" />
        <ActionItemsToggle icon={nearB} iconOn={nearW} name="Nearby sharing" />
        <ActionItems icon={settingB} name="All settings" />
        <ActionItems icon={networkB} name="Network" />
        <ActionItems icon={connectB} name="Connect" />
        <ActionItems icon={projectB} name="Project" />
        <ActionItems icon={vpnB} name="VPN" />
        <ActionItemsToggle icon={alertB} iconOn={alertW} name="Priority only" />
        <ActionItems icon={snipB} name="Screen snip" />
        <div className="w-[24%] h-[62px] mb-[4px]"></div>
      </div>
    </div>
  );
};

const TaskbarRightMenu = () => {
  const { RightMenuTaskbar } = useStore();
  return (
    <div
      className={
        "fixed top-0 bottom-0 right-0 w-[398px] bg-[#e4e4e4] " +
        " shadow-md border-l-[1px] border-black transition-all duration-[300ms] ease-in-out" +
        " px-4 pt-4 " +
        (RightMenuTaskbar ? " mr-[0px]" : " -mr-[398px]")
      }
    >
      <div className="w-full h-full relative flex flex-col">
        <div className="text-xs flex justify-end items-center font-medium transition-all duration-150">
          Manage notifications
        </div>
        <div className="flex-1 flex items-center transition-all duration-150 font-semibold justify-center text-[#808080] text-sm">
          No new notifications
        </div>
        <ActionMenu />
      </div>
    </div>
  );
};

export default TaskbarRightMenu;

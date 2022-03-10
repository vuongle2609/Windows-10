import useStore from "../store";
import { useState, useEffect, useRef } from "react";

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
import planeW from "../assets/right_menu/white/plane.svg";
import nearW from "../assets/right_menu/white/near.svg";
import nightW from "../assets/right_menu/white/night.svg";
import tabletW from "../assets/right_menu/white/tablet.svg";

import brightness from "../assets/right_menu/black/brightness.svg";

const ActionItems = (props) => {
  return (
    <div
      onClick={props.func}
      className="w-[24%] bg-[#efefef] h-[62px] mb-[4px] p-[6px] flex flex-col justify-between"
    >
      <img src={props.icon} alt="" style={{ width: 19, height: 19 }} />
      <p className="text-xs">{props.name}</p>
    </div>
  );
};

const ActionItemsToggle = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => {
        setToggle(!toggle);
        if (props.func) props.func(!toggle);
      }}
      className={
        "w-[24%] h-[62px] mb-[4px] p-[6px] flex flex-col justify-between hover:brightness-110 duration-200 transition-all" +
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

const BrightnessBar = () => {
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(0);
  const [percent, setPercent] = useState(0);
  const [hidePercent, setHidePercent] = useState(true);
  const container = useRef();
  const { setBrightness } = useStore();

  useEffect(() => {
    document.addEventListener("mouseup", () => {
      setDrag(false);
      setHidePercent(true);
    });
  }, []);

  const handleProgress = (e) => {
    const containerPosition = container.current.getBoundingClientRect().left;
    const containerWitdh = container.current.offsetWidth;
    const mousePosition = e.clientX;

    const widthDiff = Math.round(mousePosition - containerPosition);
    const progressPercent = Math.round((widthDiff / containerWitdh) * 100);

    if (widthDiff >= 0 && widthDiff <= containerWitdh) {
      setLeft(widthDiff);
      setPercent(progressPercent);
      setBrightness(0.4 - (0.4 * progressPercent) / 100);
    } else if (widthDiff < 0) {
      setLeft(0);
      setPercent(0);
      setBrightness(0.4);
    } else if (widthDiff > containerWitdh) {
      setLeft(containerWitdh);
      setPercent(100);
      setBrightness(0);
    }
  };

  document.onmousemove = (e) => {
    if (drag) {
      handleProgress(e);
    }
  };

  return (
    <div
      onMouseDown={(e) => {
        setDrag(true);
        setHidePercent(false);
        handleProgress(e);
      }}
      className="w-[86%] h-12 mx-auto mt-3 flex items-center"
    >
      <img
        src={brightness}
        alt=""
        className="mx-2"
        style={{ width: 21, height: 21 }}
      />
      <div className="flex-1 mr-6 ml-2 relative h-full group" ref={container}>
        <div className="w-full h-[2px] bg-[#3f3f3f] absolute left-0 top-1/2 -translate-y-1/2"></div>
        <div
          style={{ width: left }}
          className="w-1/2 h-[2px] bg-[#898989] absolute left-0 top-1/2 -translate-y-1/2"
        ></div>
        <div
          style={{ left: left }}
          className="w-2 h-[54%] rounded-xl bg-[#3f3f3f] group-hover:bg-[#171717] group-active:bg-[#cccccc] absolute left-0 top-1/2 -translate-y-1/2"
        >
          <div className="relative w-full h-full">
            <div
              className={
                "absolute min-h-[18px] hidden px-[10px] py-[2px] bg-[#f2f2f2] bottom-[170%] left-50% " +
                "-translate-x-[36%] border-[#d1d1d1] border-[1px] shadow-md group-active:block duration-[400ms]" +
                (hidePercent ? " opacity-0" : " opacity-1")
              }
            >
              {percent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionMenu = () => {
  const [hide, setHide] = useState(true);
  const { setIsNight, setSettings, setRightMenuTaskbar } = useStore();

  return (
    <div
      className={
        "h-[440px] transition-all duration-150 flex flex-col" +
        (hide ? " -mb-[298px]" : " mb-0")
      }
    >
      <div className="flex justify-between w-full text-xs mb-5">
        <span
          onClick={() => setHide(!hide)}
          className="hover:text-[#949494] active:text-[#b0b0b0]"
        >
          {!hide ? "Collapse" : "Expand"}
        </span>
        <span className="hover:text-[#949494] active:text-[#b0b0b0]">
          Clear all notifications
        </span>
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
        <ActionItemsToggle
          icon={nightB}
          iconOn={nightW}
          name="Night light"
          func={setIsNight}
        />
        <ActionItemsToggle icon={tabletB} iconOn={tabletW} name="Tablet mode" />
        <ActionItemsToggle
          icon={hotspotB}
          iconOn={hotspotW}
          name="Mobile hotspot"
        />
        <ActionItemsToggle icon={planeB} iconOn={planeW} name="Airplane mode" />
        <ActionItemsToggle icon={nearB} iconOn={nearW} name="Nearby sharing" />
        <ActionItems
          icon={settingB}
          func={() => {
            setSettings(true);
            setRightMenuTaskbar(false);
          }}
          name="All settings"
        />
        <ActionItems icon={networkB} name="Network" />
        <ActionItems icon={connectB} name="Connect" />
        <ActionItems icon={projectB} name="Project" />
        <ActionItems icon={vpnB} name="VPN" />
        <ActionItemsToggle icon={alertB} iconOn={alertW} name="Priority only" />
        <ActionItems icon={snipB} name="Screen snip" />
        <div className="w-[24%] h-[62px] mb-[4px]"></div>
      </div>

      <BrightnessBar />
    </div>
  );
};

const TaskbarRightMenu = () => {
  const { RightMenuTaskbar } = useStore();
  return (
    <div
      className={
        "taskbar_right fixed top-0 bottom-0 right-0 w-[398px] bg-[#e4e4e4] " +
        " shadow-md border-l-[1px] border-[#a2a2a2] transition-all duration-[300ms] ease-in-out" +
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

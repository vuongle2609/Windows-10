import { useState } from "react";
import useStore from "../store";

import planeW from "../assets/wifi_bar/white/plane.svg";
import wifiW from "../assets/wifi_bar/white/wifi.svg";
import hotspotW from "../assets/wifi_bar/white/hotspot.svg";

import planeB from "../assets/wifi_bar/dark/plane.svg";
import wifiB from "../assets/wifi_bar/dark/wifi.svg";
import hotspotB from "../assets/wifi_bar/dark/hotspot.svg";

import wifi_gray from "../assets/wifi_bar/wifi_main-gray.svg";
import wifi_lock from "../assets/wifi_bar/wifi_lock.svg";

import DropdownSelector from "../components/DropdownSelector";

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

const Wifi_off = () => {
  return (
    <div className="w-full h-full px-[10px] pt-[8px]">
      <div className="flex">
        <img
          src={wifi_gray}
          alt=""
          style={{ width: 26, height: 26 }}
          className="flex mr-[12px]"
        />
        <div className="flex flex-col">
          <h3 className="leading-4">Wi-Fi</h3>
          <p className="text-[#818181]">Turned off</p>
        </div>
      </div>
      <h3 className="mt-[18px]">Turn Wi-Fi back on</h3>
      <div className="mb-[28px]">
        <DropdownSelector
          choices={[
            {
              name: "Manualy",
              func: () => {},
            },
            {
              name: "After asdfasdfdas 1",
              func: () => {},
            },
            {
              name: "After asdfasdfdas 2",
              func: () => {},
            },
            {
              name: "After asdfasdfdas 3",
              func: () => {},
            },
            {
              name: "After asdfasdfdas 4",
              func: () => {},
            },
            {
              name: "After asdfasdfdas 5",
              func: () => {},
            },
          ]}
        />
      </div>
    </div>
  );
};

const Wifi_on = () => {
  const [id, setId] = useState(0);

  return (
    <>
      <WifiSection name="not a wifi" id="w-0" idSet={id} func={setId} />
      <WifiSection name="Waifu" id="w-1" idSet={id} func={setId} />
      <WifiSection name="wifin't" id="w-2" idSet={id} func={setId} />
      <WifiSection name="go go" id="w-3" idSet={id} func={setId} />
      <WifiSection name="tell me a joke" id="w-4" idSet={id} func={setId} />
      <WifiSection name="your life" id="w-5" idSet={id} func={setId} />
    </>
  );
};

const WifiSection = (props) => {
  const [check, setCheck] = useState(true);
  let isSet = props.idSet === props.id;

  return (
    <div
      onClick={() => props.func(props.id)}
      className={
        "flex px-[10px] pt-[5px] pb-[16px]" + (isSet ? " bg-[#f4f4f4]" : "")
      }
    >
      <img
        src={wifi_lock}
        alt=""
        style={{ width: 28, height: 28 }}
        className="flex mr-[12px]"
      />
      <div className="flex flex-col flex-1">
        <h3 className={"leading-8" + (isSet ? " leading-4" : "")}>
          {props.name}
        </h3>
        {isSet ? (
          <>
            <p className="text-[#818181]">Secured</p>{" "}
            <div className="flex items-center  mt-[12px]">
              <div
                className="w-[20px] h-[20px] flex items-center justify-center bg-[#313131] mr-[8px]"
                onClick={() => setCheck(!check)}
              >
                <div
                  className={
                    "w-[18px] h-[18px] border-[1px] border-[#0d0d0d] flex items-center justify-center" +
                    (check ? " bg-[#3f3f3f]" : " bg-white")
                  }
                >
                  {check ? (
                    <i class="fa-solid fa-check text-[#fff]"></i>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <span>Connect automatically</span>
            </div>
            <div className="w-full flex justify-end mt-[28px]">
              <span className="w-[148px] h-[32px] bg-[#c3c3c3] flex items-center justify-center">
                Connect
              </span>
            </div>
          </>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

const Internet = () => {
  const [wifi, setWifi] = useState(false);
  const { wifiBar } = useStore();

  return (
    <div
      className={
        "internet_bar fixed right-0 w-[360px] h-fit " +
        " bg-[#e4e4e4] pt-[12px] border-[#333333] border-l-[1px] border-t-[1px] " +
        " shadow-md flex flex-col duration-300 transition-all" +
        (wifiBar ? " bottom-[40px]" : " -bottom-[550px]")
      }
    >
      <div className="flex-1">{wifi ? <Wifi_on /> : <Wifi_off />}</div>
      <div className="p-1">
        <h2 className="text-base font-medium px-[10px]">
          Network & Internet settings
        </h2>
        <p className="text-xs font-thin mb-3 px-[10px]">
          Change settings, such as making a connection metered.
        </p>
        <div className="flex">
          <ActionItemsToggle
            icon={wifiB}
            iconOn={wifiW}
            name="Wi-fi"
            func={setWifi}
          />
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

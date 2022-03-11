import battery from "../assets/battery_bar/battery.svg";
import save from "../assets/battery_bar/save.svg";

import useStore from "../store";

const Battery = () => {
  const { batteryBar } = useStore();

  return (
    <div
      className={
        "w-[352px] h-[178px] p-1 bg-[#e4e4e4] fixed transition-all duration-300 battery_bar " +
        " right-[68px] border-[#333333] border-l-[1px] border-t-[1px] border-r-[1px] " +
        (batteryBar ? " bottom-[40px]" : " -bottom-[150px]")
      }
    >
      <div className="flex px-[8px] items-center">
        <img src={battery} alt="" className="pr-[15px]" />
        <h1 className="text-[40px] pr-[15px] font-thin">100%</h1>
        <p className="text-[#a5a5a5]">Fully charged</p>
      </div>
      <p className="block px-[10px] pt-[12px]">Battery settings</p>
      <div className="w-[24%] bg-[#efefef] h-[62px] mt-[11px] p-[6px] flex flex-col justify-between">
        <img src={save} alt="" style={{ width: 19, height: 19 }} />
        <p className="text-xs">Battery saver</p>
      </div>
    </div>
  );
};

export default Battery;

import useStore from "../store";
import { useState } from "react";

import { ReactComponent as Test } from "../assets/settings_icons/account.svg";

const MenuIcon = (props) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  ></svg>;
};

const ActionMenu = () => {
  const [hide, setHide] = useState(true);
  console.log(hide);
  return (
    <div
      onClick={() => setHide(!hide)}
      className={
        " bg-blue-200 h-48 transition-all duration-150 " +
        (hide ? " -mb-28" : " mb-0")
      }
    >
      foskjfskdfj
      <Test />
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

import useStore from "../store";
import { useState } from "react";

const TaskbarMenuItem = ({ icon, func }) => {
  return (
    <div
      className="w-full h-[48px] flex items-center justify-center"
      onClick={func}
    >
      <i className={`fa-thin fa-${icon} font-light text-[16px]`}></i>
    </div>
  );
};

const SideBarMenu = () => {
  const { setSettings } = useStore();
  const [sideBar, setSideBar] = useState(false)

  const handleSideBar = setTimeout(() => {
    console.log("moing")
    setSideBar(true)
  }, 1000);

  const handleIn = () => {
    handleSideBar()
  }

  const handleOut = () => {
    console.log("donging")
    setSideBar(false)
    clearTimeout(handleSideBar)
  }

  return (
    <div
      onMouseEnter={() => {
        if (!sideBar) handleIn()
      }}
      onMouseLeave={handleOut}
      className={"h-full bg-[#e4e4e4] flex flex-col justify-between absolute left-0 top-0" + (!sideBar ? " w-[48px]" : " w-[100px]")}>
      <div>
        <TaskbarMenuItem icon="bars" />
      </div>
      <div className="flex flex-col w-full items-center text-[20px]">
        <TaskbarMenuItem icon="user" />
        <TaskbarMenuItem icon="file" />
        <TaskbarMenuItem icon="image" />
        <TaskbarMenuItem icon="gear" func={() => setSettings(true)} />
        <TaskbarMenuItem icon="power-off" />
      </div>
    </div>
  );
};

const TaskbarMenu = () => {
  const { menuOpen } = useStore();

  return (
    <div
      className={
        `fixed left-0 h-1/2 flex origin-bottom-left duration-[160ms] z-[999]` +
        (menuOpen ? " bottom-[40px]" : " -bottom-full")
      }
    >
      <div className="w-full h-full bg-red-200 relative">
        <SideBarMenu />
        <div className="w-[274px] h-full bg-[#e4e4e4] ml-[48px]">
          fbnamnfbanmsfnmbsanb
        </div>
      </div>
    </div>
  );
};

export default TaskbarMenu;

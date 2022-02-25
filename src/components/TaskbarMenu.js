import useStore from "../store";

const TaskbarMenuItem = ({ icon, func }) => {
  return (
    <div
      className="w-full h-[48px] flex items-center justify-center"
      onClick={func}
    >
      <i class={`fa-thin fa-${icon} font-light text-[16px]`}></i>
    </div>
  );
};

const TaskbarMenu = () => {
  const { menuOpen, setSettings } = useStore();
  return (
    <div
      className={
        `fixed left-0 h-1/2 flex origin-bottom-left duration-[160ms] z-[999]` +
        (menuOpen ? " bottom-[40px]" : " -bottom-full")
      }
    >
      <div className="w-[48px] h-full bg-[#e4e4e4] flex flex-col justify-between">
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
      <div className="w-[274px] h-full bg-[#e4e4e4]"></div>
    </div>
  );
};

export default TaskbarMenu;

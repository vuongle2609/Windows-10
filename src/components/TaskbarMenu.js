import useStore from "../store";

const TaskbarMenuItem = ({ icon }) => {
  return (
    <div className="w-full h-[48px] flex items-center justify-center">
      <i class={`fa-regular fa-${icon}`}></i>
    </div>
  );
};

const TaskbarMenu = () => {
  const { menuOpen } = useStore();
  return (
    <div
      className={
        `fixed left-0 h-1/2 flex bottom-[40px] origin-bottom-left duration-150 ` +
        (menuOpen ? " scale-100" : " scale-0")
      }
    >
      <div className="w-[48px] h-full bg-lightMode flex flex-col justify-between">
        <div>
          <TaskbarMenuItem icon="bars" />
        </div>
        <div className="flex flex-col w-full items-center text-[20px]">
          <TaskbarMenuItem icon="user" />
          <TaskbarMenuItem icon="file" />
          <TaskbarMenuItem icon="image" />
          <TaskbarMenuItem icon="gear" />
          <TaskbarMenuItem icon="power-off" />
        </div>
      </div>
      <div className="w-[274px] h-full bg-lightMode"></div>
    </div>
  );
};

export default TaskbarMenu;

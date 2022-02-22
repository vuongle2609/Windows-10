import TaskbarMenu from "./TaskbarMenu";
import useStore from "../store";

const Taskbar = () => {
  const { setMenuOpen, menuOpen } = useStore();

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-[40px] bg-lightMode dark:bg-darkMode flex z-99999">
        <div
          className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200"
          onClick={setMenuOpen}
        >
          <i class="fa-brands fa-windows text-[20px]"></i>
        </div>
        {/* <div className="h-[40px] w-[48px] flex justify-center items-center hover:bg-red-200">
          <i class="fa-regular fa-magnifying-glass reve"></i>
        </div> */}
      </div>
      <TaskbarMenu />
      
    </>
  );
};

export default Taskbar;

import Taskbar from "../components/Taskbar";
import NotePad from "../components/Apps/NotePad";
import Chrome from "../components/Apps/Chrome";

const Desktop = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-200 select-none">
      {/* <WindowsBase /> */}
      <NotePad />
      <Chrome />
      <Taskbar />
    </div>
  );
};

export default Desktop;

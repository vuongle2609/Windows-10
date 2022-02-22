import Taskbar from "../components/Taskbar";
import NotePad from "../components/Apps/NotePad";
import Chrome from "../components/Apps/Chrome";
import Vscode from "../components/Apps/Vscode";
import Settings from "../components/Apps/Settings";

const Desktop = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-200 select-none">
      {/* <NotePad /> */}
      {/* <Chrome /> */}
      {/* <Vscode /> */}
      {/* <Settings /> */}
      <Taskbar />
    </div>
  );
};

export default Desktop;

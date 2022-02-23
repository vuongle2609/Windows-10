import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Settings = () => {
  const { setSettings } = useStore();

  return (
    <WindowsBase name="Settings" resizer="settings" appClose={setSettings}>
      <div>ads</div>
    </WindowsBase>
  );
};

export default Settings;

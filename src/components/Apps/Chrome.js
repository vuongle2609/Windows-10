import WindowsBase from "./WindowsBase";

const NotePad = () => {
  return (
      <WindowsBase name="Chrome" resizer="chrome">
        <div className="w-full h-full bg-white">this is Chrome</div>
      </WindowsBase>
  );
};

export default NotePad;

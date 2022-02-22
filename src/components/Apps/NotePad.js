import WindowsBase from "./WindowsBase";

const NotePad = () => {
  return (
        <WindowsBase name="Notepad" resizer="notePad">
      <div className="w-full h-full bg-white">this is notePad</div>
    </WindowsBase>
  );
};

export default NotePad;

import WindowsBase from "./WindowsBase";

const Krunker = () => {
  return (
    <WindowsBase name="Krunker" resizer="krunker">
      <div className="w-full h-full bg-white flex flex-col">
        
        <div className="w-full flex-1 bg-red-200">
        <iframe src="https://krunker.io" allowfullscreen className="w-full h-full"></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Krunker;

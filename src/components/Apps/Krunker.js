import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Krunker = () => {
  const { setKrunker } = useStore();

  return (
    <WindowsBase name="Krunker" resizer="krunker" appClose={setKrunker}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1 bg-red-200">
          <iframe
            src="https://krunker.io"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Krunker;

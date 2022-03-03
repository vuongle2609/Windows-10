import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Yugioh = () => {
  const { setYugioh } = useStore();

  return (
    <WindowsBase name="Yugioh" resizer="yugioh" appClose={setYugioh} num={7}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1">
          <iframe
            src="https://duelingnexus.com/"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Yugioh;

import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Minecraft = () => {
  const { setMinecraft } = useStore();

  return (
    <WindowsBase name="Minecraft" resizer="minecraft" appClose={setMinecraft} num={4}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1 bg-red-200">
          <iframe
            src="https://classic.minecraft.net/?join=DgNGgNHriWzmZpOW"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Minecraft;

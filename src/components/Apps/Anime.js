import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Anime = () => {
  const { setAnime } = useStore();

  return (
    <WindowsBase name="Anime" resizer="anime" appClose={setAnime} num={5}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1 bg-red-200">
          <iframe
            src="https://paff-anime.vercel.app/"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Anime;

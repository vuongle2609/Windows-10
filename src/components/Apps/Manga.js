import WindowsBase from "./WindowsBase";

const Manga = () => {
  return (
    <WindowsBase name="Manga" resizer="manga">
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1 bg-red-200">
          <iframe
            src="https://paff-web-manga.vercel.app/"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Manga;

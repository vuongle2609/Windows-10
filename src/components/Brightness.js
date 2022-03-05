import useStore from "../store";

const Brightness = () => {
  const { brightness } = useStore();

  return (
    <div
      className={
        "fixed top-0 left-0 right-0 bottom-0 z-[9999] pointer-events-none"
      }
      style={{ backgroundColor: `RGBA(0,0,0,${brightness})` }}
    ></div>
  );
};

export default Brightness;

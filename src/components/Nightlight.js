import useStore from "../store";

const Nightlight = () => {
  const { isNight } = useStore();

  return (
    <div
      className={
        "fixed top-0 left-0 right-0 bottom-0 bg-filterOrange layer duration-[2s] z-[9999] pointer-events-none" +
        (isNight ? " opacity-1" : " opacity-0")
      }
    ></div>
  );
};

export default Nightlight;

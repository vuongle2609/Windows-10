import { useState, useRef, useEffect } from "react";
import useStore from "../store";

import vol1 from "../assets/volume_bar/1.svg";
import vol2 from "../assets/volume_bar/2.svg";
import vol3 from "../assets/volume_bar/3.svg";
import vol4 from "../assets/volume_bar/4.svg";

const VolumeAdjust = () => {
  const [drag, setDrag] = useState(false);
  const [left, setLeft] = useState(0);
  const [percent, setPercent] = useState(0);
  const container = useRef();
  const { setVolIcon, volumeBar } = useStore();

  document.addEventListener("mouseup", () => {
    setDrag(false);
  });

  useEffect(() => {
    if (!drag) {
      setVolIcon(percent);
    }
  }, [drag]);

  let srcRender;

  const handleProgress = (e) => {
    const containerPosition = container.current.getBoundingClientRect().left;
    const containerWitdh = container.current.offsetWidth;
    const mousePosition = e.clientX;

    const widthDiff = Math.round(mousePosition - containerPosition);
    const progressPercent = Math.round((widthDiff / containerWitdh) * 100);

    if (widthDiff >= 0 && widthDiff <= containerWitdh) {
      setLeft(widthDiff);
      setPercent(progressPercent);
    } else if (widthDiff < 0) {
      setLeft(0);
      setPercent(0);
    } else if (widthDiff > containerWitdh) {
      setLeft(containerWitdh);
      setPercent(100);
    }
  };

  document.onmousemove = (e) => {
    if (drag) {
      handleProgress(e);
    }
  };

  if (percent > 65) {
    srcRender = vol4;
  } else if (percent > 32) {
    srcRender = vol3;
  } else if (percent > 0) {
    srcRender = vol2;
  } else {
    srcRender = vol1;
  }

  return (
    <div
      className={
        "volume_bar flex flex-col fixed right-0 bg-[#eeeeee] border-1px border-black px-3 py-3 w-[370px] duration-150 transition-all" +
        (volumeBar ? " bottom-[40px]" : " -bottom-[80px]")
      }
    >
      <h3 className="text-[15px]">Speakers (Realtek High Definition Audio)</h3>
      <div
        onMouseDown={(e) => {
          setDrag(true);
          handleProgress(e);
        }}
        className="w-[94%] h-12 mt-3 flex items-center"
      >
        <img
          src={srcRender}
          alt=""
          className="mx-2"
          style={{ width: 28, height: 28 }}
        />

        <div className="flex-1 mr-6 ml-2 relative h-full group" ref={container}>
          <div className="w-full h-[2px] bg-[#3f3f3f] absolute left-0 top-1/2 -translate-y-1/2"></div>
          <div
            style={{ width: left }}
            className="w-1/2 h-[2px] bg-[#898989] absolute left-0 top-1/2 -translate-y-1/2"
          ></div>
          <div
            style={{ left: left }}
            className="w-2 h-[54%] rounded-xl bg-[#3f3f3f] group-hover:bg-[#171717] group-active:bg-[#cccccc] absolute left-0 top-1/2 -translate-y-1/2"
          ></div>
        </div>

        <div className="min-w-[20px] text-xl">{percent}</div>
      </div>
    </div>
  );
};

export default VolumeAdjust;

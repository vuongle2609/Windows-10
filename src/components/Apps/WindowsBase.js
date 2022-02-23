import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { useState } from "react";

const WindowsBase = (props) => {
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("96%");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [max, setMax] = useState(false);

  const handleMaxSize = () => {
    setWidth("100%");
    setHeight("96%");
    setPosition({ x: 0, y: 0 });
    setMax(false);
  };

  const handleScaleSize = () => {
    setWidth("50%");
    setHeight("70%");
    setPosition(null);
    setMax(true);
  };

  return (
    <Draggable handle=".topBar" position={position} >
      <Resizable
        defaultSize={{
          width: "100%",
          height: "96%",
        }}
        minWidth="400"
        minHeight="250"
        size={{ width, height }}
        onResizeStop={(e, direction, ref, d) => {
          setWidth(width + d.width);
          setHeight(height + d.height);
        }}
      >
        <div
          className={
            "relative inline-flex flex-col shadow-2xl w-full h-full resize"
          }
        >
          <div
            className={
              "absolute bottom-0 right-0 " + "resizer-" + props.resizer
            }
          ></div>
          <div className=" w-full h-[30px] bg-lightMode dark:bg-darkMode justify-between flex items-center">
            <p className="text-[12px] pl-2">{props.name}</p>
            <div className="flex-1 topBar h-full"></div>
            <div className="flex items-center h-full">
              <div className="w-[46px] flex h-full items-center justify-center">
                <i className="fa-regular fa-horizontal-rule text-[8px]"></i>
              </div>
              {!max ? (
                <div
                  onClick={handleScaleSize}
                  className="w-[46px] flex h-full items-center justify-center relative"
                >
                  <i className="fa-regular fa-square-full text-[10px]"></i>
                  <i className="fa-regular fa-square-full text-[10px] absolute top-2 right-4"></i>
                </div>
              ) : (
                false
              )}
              {max ? (
                <div
                  onClick={handleMaxSize}
                  className="w-[46px] flex h-full items-center justify-center"
                >
                  <i className="fa-regular fa-square-full text-[10px]"></i>
                </div>
              ) : (
                false
              )}
              <div className="w-[46px] flex h-full items-center justify-center hover:bg-[#e81123] hover:text-white">
                <i className="fa-regular fa-x text-[12px]"></i>
              </div>
            </div>
          </div>

          <div className="w-full flex-1">{props.children}</div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default WindowsBase;

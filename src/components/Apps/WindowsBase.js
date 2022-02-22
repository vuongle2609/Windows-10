import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

const WindowsBase = (props) => {
  return (
    <Draggable handle=".topBar">
      <Resizable
        defaultSize={{
          width: 400,
          height: 200,
        }}
        minWidth='400'
        minHeight='250'
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
          <div className=" w-full h-[38px] bg-lightMode dark:bg-darkMode justify-between flex items-center">
            <p className="">{props.name}</p>
            <div className="flex-1 topBar h-full"></div>
            <div className="flex items-center h-full">
              <div className="w-[46px] flex h-full items-center justify-center">
                <i className="fa-regular fa-horizontal-rule text-[8px]"></i>
              </div>
              <div className="w-[46px] flex h-full items-center justify-center">
                <i className="fa-regular fa-square-full text-[10px]"></i>
              </div>
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

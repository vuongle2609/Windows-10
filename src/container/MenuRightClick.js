import display from "../assets/icon_windows/display-setting.svg";
import personalize from "../assets/icon_windows/personilize.svg";
import terminal from "../assets/icon_windows/Windows_Terminal_Logo_256x256.png";
import folder from "../assets/icon_windows/folder_win10.svg";
import shortcut from "../assets/icon_windows/thumb_14378800210Shortcut_arrow.svg";
import winrar from "../assets/icon_windows/winrar-icon-beec29c4afa8ea35c487fdd3bface3198eab3d54.png";
import file from "../assets/icon_windows/file-icon.svg";
import { useEffect } from "react";
import useStore from "../store";
const itemArr = ["viewS", "sortS", "newS"];

const MenuItemDrop = (props) => {
  useEffect(() => {
    const handleSubMenu = () => {
      if (props.trigger) {
        const sItem = document.querySelector(`#${props.trigger}`);
        const sMenu = document.querySelector(`#${props.trigger}S`);

        sItem.addEventListener("mouseover", () => {
          itemArr.forEach((item) => {
            document.querySelector(`#${item}`).classList.add("hidden");
          });
          sMenu.classList.remove("hidden");
        });
      }
    };

    handleSubMenu();
  }, []);

  return (
    <div
      className="relative flex justify-between items-center py-[2px] hover:bg-white px-3"
      id={props.trigger}
    >
      <div className="flex items-center">
        {props.img ? (
          <img src={props.img} alt="" className="w-[17px] h-auto mr-2" />
        ) : (
          <div className="w-[17px] h-auto mr-2"></div>
        )}
        <p className="text-[12px]">{props.name}</p>
      </div>
      <i className="fa-thin fa-angle-right text-[20px]"></i>
      {props.trigger === "view" ? <SubMenuView /> : false}
      {props.trigger === "sort" ? <SubMenuSort /> : false}
      {props.trigger === "new" ? <SubMenuNew /> : false}
    </div>
  );
};

const MenuItem = (props) => {
  let sideStatus;

  const handleStatus = () => {
    if (props.img) {
      sideStatus = (
        <img src={props.img} alt="" className="w-[17px] h-auto mr-2" />
      );
    } else if (props.check) {
      sideStatus = <i className="fa-thin fa-check font-medium mr-2"></i>;
    } else if (props.isDot) {
      sideStatus = (
        <i className="fa-solid fa-circle-small text-[12px] mr-[17px]"></i>
      );
    } else {
      sideStatus = <div className="w-[17px] h-auto mr-2"></div>;
    }
  };

  handleStatus();

  return (
    <div
      className=" flex justify-between items-center py-[2px] hover:bg-white px-3"
      onClick={props.func}
    >
      <div className="flex items-center">
        {sideStatus}
        <p className="text-[12px]">{props.name}</p>
      </div>
    </div>
  );
};

const SubMenuView = () => {
  const { icon, setIcon, setShowIcon, showIcon } = useStore();

  const closeMenu = () => {
    const RMenu = document.querySelector(".right-menu");
    RMenu.classList.add("hidden");
    itemArr.forEach((item) => {
      document.querySelector(`#${item}`).classList.add("hidden");
    });
  };

  return (
    <div
      id="viewS"
      className="h-fit w-[256px] bg-[#eeeeee] shadow-md absolute shadow-black border-black border-[1px] sub-menu py-1 -top-[5px] left-full hidden"
    >
      <MenuItem
        name="Large icons"
        func={() => {
          setIcon(2);
          closeMenu();
        }}
        isDot={icon === 2}
      />
      <MenuItem
        name="Medium icons"
        func={() => {
          setIcon(1);
          closeMenu();
        }}
        isDot={icon === 1}
      />
      <MenuItem
        name="Small icons"
        func={() => {
          setIcon(0);
          closeMenu();
        }}
        isDot={icon === 0}
      />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItem name="Auto arrange icons" check={true} />
      <MenuItem name="Align icons to grid" check={true} />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItem
        name="Show desktop icons"
        func={() => {
          setShowIcon();
          closeMenu();
        }}
        check={showIcon}
      />
    </div>
  );
};

const SubMenuSort = () => {
  return (
    <div
      id="sortS"
      className="h-fit w-[256px] bg-[#eeeeee] shadow-md absolute shadow-black border-black border-[1px] sub-menu py-1 -top-[5px] left-full hidden"
    >
      <MenuItem name="Name" />
      <MenuItem name="Size" isDot={true} />
      <MenuItem name="Item type" />
      <MenuItem name="Date modified" />
    </div>
  );
};

const SubMenuNew = () => {
  return (
    <div
      id="newS"
      className="h-fit w-[256px] bg-[#eeeeee] shadow-md absolute shadow-black border-black border-[1px] sub-menu py-1 -top-[5px] left-full hidden"
    >
      <MenuItem name="Folder" img={folder} />
      <MenuItem name="Shortcut" img={shortcut} />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItem name="WinRAR archive" img={winrar} />
      <MenuItem name="Text Document" img={file} />
      <MenuItem name="WinRAR ZIP archive" img={winrar} />
    </div>
  );
};

const MenuRightClick = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const RMenu = document.querySelector(".right-menu");
    if (e.target.classList.contains("desktop")) {
      RMenu.classList.remove("hidden");

      const xCondition = e.clientX > document.documentElement.clientWidth / 2;
      const xDiff = e.clientX - (xCondition ? RMenu.offsetWidth : 0);

      const yCondition = e.clientY > document.documentElement.clientHeight / 2;
      const yDiff = e.clientY - (yCondition ? RMenu.offsetHeight : 0);

      RMenu.style.top = yDiff + "px";
      RMenu.style.left = xDiff + "px";
    } else {
      RMenu.classList.add("hidden");
    }
  });

  document.onmousedown = (e) => {
    const RMenu = document.querySelector(".right-menu");
    const isDescendant = RMenu.contains(e.target);
    if (isDescendant) return;
    RMenu.classList.add("hidden");
    itemArr.forEach((item) => {
      document.querySelector(`#${item}`).classList.add("hidden");
    });
  };

  return (
    <div className="h-fit w-[256px] bg-[#eeeeee] shadow-md absolute shadow-black border-black border-[1px] right-menu hidden py-1">
      <MenuItemDrop name="View" trigger="view" />
      <MenuItemDrop name="Sort by" trigger="sort" />
      <MenuItem
        name="Refresh"
        func={() => {
          console.log("what is wrong with you?...");
        }}
      />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItem name="Paste" />
      <MenuItem name="Paste shortcut" />
      <MenuItem name="Undo Delete" />
      <MenuItem name="Open in Windows Terminal" img={terminal} />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItemDrop name="New" trigger="new" />
      <div className="h-[1px] w-[90%] bg-black my-1 mx-3"></div>
      <MenuItem name="Display settings" img={display} />
      <MenuItem name="Personalize" img={personalize} />
    </div>
  );
};

export default MenuRightClick;

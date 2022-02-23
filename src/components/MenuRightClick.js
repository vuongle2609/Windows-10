const MenuItemDrop = (props) => {
  return (
    <div className=" flex justify-between items-center py-[2px]">
      <p className="text-[12px]">{props.name}</p>
      <i className="fa-solid fa-angle-right text-[16px]"></i>
    </div>
  );
};

const MenuItem = (props) => {
  return (
    <div className=" flex justify-between items-center py-[2px]">
      <p className="text-[12px]">{props.name}</p>
    </div>
  );
};

const MenuRightClick = () => {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const RMenu = document.querySelector(".right-menu");
    if (e.target.classList.contains("desktop")) {
      RMenu.classList.remove("hidden");

      let xDiff;
      let yDiff;

      if (e.clientX > document.documentElement.clientWidth / 2) {
        xDiff = e.clientX - RMenu.offsetWidth;
      } else {
        xDiff = e.clientX;
      }

      if (e.clientY > document.documentElement.clientHeight / 2) {
        yDiff = e.clientY - RMenu.offsetHeight;
      } else {
        yDiff = e.clientY;
      }

      RMenu.style.top = yDiff + "px";
      RMenu.style.left = xDiff + "px";
    } else {
      RMenu.classList.add("hidden");
    }
  });

  document.onmousedown = () => {
    const RMenu = document.querySelector(".right-menu");
    RMenu.classList.add("hidden");
  };

  return (
    <div className="h-fit w-[256px] bg-[#eeeeee] shadow-md absolute shadow-black border-black border-[1px] px-3 right-menu hidden">
      <div className="border-b-black border-b-[1px] py-1">
        <MenuItemDrop name="View" />
        <MenuItemDrop name="Sort by" />
        <MenuItem name="Refresh" />
      </div>
      <div className="border-b-black border-b-[1px] py-1">
        <MenuItem name="Paste" />
        <MenuItem name="Paste shortcut" />
        <MenuItem name="Undo Delete" />
        <MenuItem name="Open in Windows Terminal" />
      </div>
      <div className="border-b-black border-b-[1px] py-1">
        <MenuItemDrop name="New" />
      </div>
      <div className=" py-1">
        <MenuItem name="Display settings" />
        <MenuItem name="Personalize" />
      </div>
    </div>
  );
};

export default MenuRightClick;

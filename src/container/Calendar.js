import { useState, useEffect } from "react";
import useStore from "../store";
import Calendar from "react-calendar";
import "../css/calendar.css";

const Clock = (props) => {
  const [render, setRender] = useState(false);
  const date = new Date();

  const minutes = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  const dateTime = date.getDate();
  const year = date.getFullYear();

  setTimeout(() => {
    setRender(!render);
  }, 500);

  return (
    <div className="px-6 py-2">
      <div className="flex items-end">
        <h1 className="text-[42px]">
          {hour}:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <p className="relative bottom-[10px] ml-[12px]">
          {hour > 12 ? " pm" : " am"}
        </p>
      </div>
      <div className="-mt-1">
        {props.dayDisplay}, {dateTime} {props.mothDisplay} {year}
      </div>
    </div>
  );
};

const DatePicker = (props) => {
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    const handleDays = (daysArr) => {
      daysArr.map((day, index) => {
        const dayContent = day.slice(0, 2);
        document.querySelector(
          `.react-calendar__month-view__weekdays__weekday:nth-child(${
            index + 1
          }) abbr`
        ).textContent = dayContent;
        document
          .querySelector(
            `.react-calendar__month-view__weekdays__weekday:nth-child(${
              index + 1
            }) abbr`
          )
          .classList.add("justify-center", "flex");
      });
    };

    handleDays(days);

    const hiddenBtnList = [
      ".react-calendar__navigation__arrow.react-calendar__navigation__prev2-button",
      ".react-calendar__navigation__arrow.react-calendar__navigation__next2-button",
      ".react-calendar__navigation__label",
      ".react-calendar__navigation__label__labelText.react-calendar__navigation__label__labelText--from",
    ];

    hiddenBtnList.map((btn) => {
      document.querySelector(btn).classList.add("hidden");
    });

    const prevBtn = document.querySelector(
      ".react-calendar__navigation__arrow.react-calendar__navigation__prev-button"
    );

    const nextBtn = document.querySelector(
      ".react-calendar__navigation__arrow.react-calendar__navigation__next-button"
    );

    const navigation = document.querySelector(".react-calendar__navigation");

    const dayList = document.querySelector(".react-calendar__month-view");

    prevBtn.innerHTML = '<i class="fa-light fa-chevron-up"></i>';
    nextBtn.innerHTML = '<i class="fa-light fa-chevron-down"></i>';

    prevBtn.classList.add("relative");
    nextBtn.classList.add("relative", "ml-[32px]");
    navigation.classList.add(
      "flex",
      "justify-end",
      "mb-[12px]",
      "calendar_bar"
    );
    dayList.classList.add("-mx-[10px]");

    const handleStyle = (className, style) => {
      const elArr = document.querySelectorAll(className);
      for (let i = 0; i < elArr.length; i++) {
        elArr[i].classList.add(style);
      }
    };

    handleStyle(
      ".react-calendar__tile.react-calendar__month-view__days__day",
      "mb-[22px]"
    );
    handleStyle(".react-calendar__month-view__weekdays__weekday", "mb-[15px]");
    handleStyle(
      ".react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth",
      "text-[#89898b]"
    );
  });

  return (
    <div className="px-6">
      <p className="relative top-5">
        {props.mothDisplay} {year}
      </p>

      <Calendar />
    </div>
  );
};

const DateHandle = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-[#a6a7aa] -mt-[6px]"></div>
      <div className="px-6 py-2 flex flex-col justify-between min-h-[242px]">
        <div className="flex flex-col">
          <h2 className="mb-[6px]">Today</h2>
          <div className="w-full h-[30px] mb-[14px] border-[1px] border-[#808182] flex items-center pl-2 text-[#808182]">
            Add an event or reminder
          </div>
          <h2 className="text-sm">No events</h2>
        </div>
        <div className="flex items-center justify-end">
          <p className="text-sm">Hide agenda</p>
          <i className="fa-light fa-chevron-down ml-2 text-base"></i>
        </div>
      </div>
    </>
  );
};

const CalendarBar = () => {
  const { clockBar } = useStore();
  const date = new Date();

  const day = date.getDay();
  const month = date.getMonth();

  let dayDisplay;
  let mothDisplay;

  switch (day) {
    case 0:
      dayDisplay = "Sunday";
      break;
    case 1:
      dayDisplay = "Monday";
      break;
    case 2:
      dayDisplay = "Tuesday";
      break;
    case 3:
      dayDisplay = "Wednesday`";
      break;
    case 4:
      dayDisplay = "Thursday";
      break;
    case 5:
      dayDisplay = "Friday";
      break;
    case 6:
      dayDisplay = "Saturday";
  }

  switch (month) {
    case 0:
      mothDisplay = "January";
      break;
    case 1:
      mothDisplay = "February";
      break;
    case 2:
      mothDisplay = "March";
      break;
    case 3:
      mothDisplay = "April";
      break;
    case 4:
      mothDisplay = "May";
      break;
    case 5:
      mothDisplay = "June";
      break;
    case 6:
      mothDisplay = "July";
      break;
    case 7:
      mothDisplay = "August";
      break;
    case 8:
      mothDisplay = "September";
      break;
    case 9:
      mothDisplay = "October";
      break;
    case 10:
      mothDisplay = "November";
      break;
    case 11:
      mothDisplay = "December";
  }

  return (
    <div
      className={
        "calendar_bar fixed right-0 w-[360px] h-fit calendar_bar transition-all duration-150 " +
        "bg-[#e4e4e4] border-[#333333] border-l-[1px] border-t-[1px] " +
        (clockBar ? " bottom-[40px]" : " -bottom-[700px]")
      }
    >
      <Clock dayDisplay={dayDisplay} mothDisplay={mothDisplay} />
      <div className="w-full h-[1px] bg-[#a6a7aa] mt-[10px]"></div>
      <DatePicker mothDisplay={mothDisplay} />
      <DateHandle />
    </div>
  );
};

export default CalendarBar;

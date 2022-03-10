import { useState, useEffect } from "react";
import Calendar from "react-calendar";

const Clock = () => {
  const [render, setRender] = useState(false);

  setTimeout(() => {
    setRender(!render);
  }, 500);

  const date = new Date();

  const minutes = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  const day = date.getDay();
  const dateTime = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

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
        {dayDisplay}, {dateTime} {mothDisplay} {year}
      </div>
    </div>
  );
};

const DatePicker = () => {
  const [value, onChange] = useState(new Date());

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
      daysArr.map((day) => {
        const dayContent = day.slice(0, 2);
        document.querySelector(`[aria-label="${day}"]`).textContent =
          dayContent;
      });
    };

    handleDays(days);
  }, []);

  console.log(value);

  return (
    <div className="px-6">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

const CalendarBar = () => {
  return (
    <div
      className="fixed bottom-[40px] right-0 w-[360px] h-fit 
  bg-[#e4e4e4] border-[#333333] border-l-[1px] border-t-[1px]"
    >
      <Clock />
      <div className="w-full h-[1px] bg-[#a6a7aa] mt-[10px]"></div>
      <DatePicker />
    </div>
  );
};

export default CalendarBar;

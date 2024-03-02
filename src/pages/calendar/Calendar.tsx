"use client";
import React, { useEffect, useState } from "react";
import Monthly from "./components/Monthly";
import Weekly from "./components/Weekly";
import Daily from "./components/Daily";
import Navbar from "../../base-compoents/Navbar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Calendar() {
  const [term, setTerm] = useState("Month");
  const [day, setDay] = useState<number>(1);
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [noOfDays, setNoOfDays] = useState<number[]>([]);
  const [blankdays, setBlankdays] = useState<number[]>([]);
  const [events, setEvents] = useState<any>([]);
    const campaigns = [];
  function getDayOfWeek(year: number, month: number, day: number) {
    const date = new Date(year, month, day); // Month is 0-based, so subtract 1
    let dayOfWeek = date.getDay() - 1; // Adjust to start from Monday

    // Handle Sunday (which has index 0) separately
    if (dayOfWeek === -1) {
      dayOfWeek = 6;
    }

    return dayOfWeek;
  }
  const getDatesForCurrentWeek = (selectedDate = new Date()) => {
    const currentDate = new Date(selectedDate);
    const dayOfWeek = currentDate.getDay();
    const diff = currentDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const monday = new Date(currentDate.setDate(diff));
    const weekDates = Array.from({ length: 7 }, (_, i) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i));
    return weekDates;
  };

  useEffect(() => {
    const today = new Date();
    setDay(today.getDate());
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    const daysOfAWeek = getDatesForCurrentWeek(today);
    const weekDaysFiltered = daysOfAWeek.map(date => date.getDate());
    setWeekDays(weekDaysFiltered);
  }, [term]);

  useEffect(() => {
    const daysInMonth = new Date(year, month, 0).getDate();
    // find where to start calendar day of week
    const blankdaysArray = Array.from(
      { length: getDayOfWeek(year, month, 1) },
      (_, i) => i + 1
    );
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const eventsArray = campaigns?.map((campaign) => ({
      name: campaign.name,
      id: campaign.id,
      start:
        campaign.trigger?.type === "Event trigger"
          ? campaign.trigger?.eventFilter?.startTime ?? ""
          : campaign.trigger?.timeFilter?.selectedDateTime ?? "",
      end:
        campaign.trigger?.type === "Event trigger"
          ? campaign.trigger?.eventFilter?.endTime ?? ""
          : campaign.trigger?.timeFilter?.repeatUntil ?? "",
      color: campaign.color,
    }));

    setEvents(eventsArray);
    setBlankdays(blankdaysArray);
    setNoOfDays(daysArray);
  }, [year, month, campaigns]);

  function prev(type: string, currentDate: Date) {
    if (type === "Day") {
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (type === "Week") {
      const currentDayOfWeek = currentDate.getDay();
      const daysUntilPreviousMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
      currentDate.setDate(currentDate.getDate() - daysUntilPreviousMonday - 7);
      const weekdays = getDatesForCurrentWeek(currentDate);
      const weekDaysFiltered = weekdays.map(date => date.getDate());
      setWeekDays(weekDaysFiltered);
    } else if (type === "Month") {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }
    // Update the calendar with the new date
    setDay(currentDate.getDate());
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }

  function next(type: string, currentDate: Date) {
    if (type === "Day") {
      currentDate.setDate(currentDate.getDate() + 1);
    } else if (type === "Week") {
      const currentDayOfWeek = currentDate.getDay();
      const daysUntilNextMonday = currentDayOfWeek === 0 ? 1 : 8 - currentDayOfWeek;
      currentDate.setDate(currentDate.getDate() + daysUntilNextMonday);
      const weekdays = getDatesForCurrentWeek(currentDate);
      const weekDaysFiltered = weekdays.map(date => date.getDate());
      setWeekDays(weekDaysFiltered);
    } else if (type === "Month") {
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    // Update the calendar with the new date
    setDay(currentDate.getDate());
    setMonth(currentDate.getMonth());
    setYear(currentDate.getFullYear());
  }
  
  const handlePrevClick = () => {
    prev(term, new Date(year, month, day));
  }
  ;
  const handleNextClick = () => {
    next(term, new Date(year, month, day));
  };
  
  return (
    <>
    <Navbar />
    <div className="lg:flex lg:h-[80vh] lg:flex-col rounded-lg px-12 lg:px-24 2xl:px-40">
      <h1 className="mt-8 mb-0 text-3xl text-primary-400">Events Calendar</h1>
      <header className="flex items-center justify-between px-8 pt-6 mb-6 lg:flex-none">
        <div className="flex items-center justify-start gap-4">
          <h1
            className={`text-lg font-semibold leading-6 text-gray-900 ${
              term === "Month" ? "w-40" : " w-56"
            }`}
          >
            {term === "Month" && (
              <time dateTime="2022-01">{MONTH_NAMES[month] + " " + year}</time>
            )}
            {term === "Week" && (
              <time dateTime="2022-01">
                {weekDays[0]} -{" "}{weekDays[6]}{" "}
                {weekDays[0] < weekDays[6] ? MONTH_NAMES[month] + " " + year : MONTH_NAMES[month+1] + " " + year}
              </time>
            )}
            {term === "Day" && (
              <time dateTime="2022-01">
                {day + " " + MONTH_NAMES[month] + " " + year}
              </time>
            )}
          </h1>
          <div className="flex items-center gap-6">
            <button type="button" onClick={handlePrevClick} title="Previous">
                <svg fill="black" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 330 330" xml:space="preserve">
                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                    l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                    C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
                </svg>
            </button>
            {/* <ChevronLeftIcon
              width={30}
              className=" text-primary cursor-pointer rounded-full hover:bg-gray-100"
            /> */}
            <button type="button" onClick={handleNextClick} title="Next">
                <svg fill="black" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 330.002 330.002" xml:space="preserve">
                <path id="XMLID_103_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
                    l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
                    c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
                </svg>
            </button>
            {/* <ChevronRightIcon
              onClick={handleNextClick}
              width={30}
              className=" text-primary cursor-pointer rounded-full hover:bg-gray-100"
            /> */}
          </div>
        </div>
        <span className="isolate inline-flex rounded-md shadow-sm select-none">
          <button
            onClick={() => setTerm("Day")}
            type="button"
            className={`relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
              term === "Day" ? " bg-gray-100" : "bg-white"
            }`}
          >
            Day
          </button>
          <button
            onClick={() => setTerm("Week")}
            type="button"
            className={`relative -ml-px inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
              term === "Week" ? " bg-gray-100" : "bg-white"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTerm("Month")}
            type="button"
            className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 ${
              term === "Month" ? " bg-gray-100" : "bg-white"
            } `}
          >
            Month
          </button>
        </span>
      </header>

      {term === "Month" && (
        <Monthly
          classNames={classNames}
          year={year}
          month={month}
          blankdays={blankdays}
          events={events}
          noOfDays={noOfDays}
          campaigns={campaigns}
        />
      )}
      {term === "Week" && (
        // <Weekly startDate={weekStartDate} year={year} month={month} events={e} />
        <Weekly
          days={weekDays}
          year={year}
          month={month}
          events={events}
          campaigns={campaigns}
        />
      )}
      {term === "Day" && (
        <>
          <h2 className="text-base px-8 pb-4 font-normal uppercase left-6">
            {daysOfWeek[new Date(year, month, day).getDay()]}
          </h2>
          <Daily events={events} day={day} month={month} year={year} campaigns={campaigns}/>
        </>
      )}
    </div>
  </>
  );
}
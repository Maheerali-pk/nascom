import React, { useState } from "react";

interface eventType {
  name: string;
  id: string;
  start: number;
  end: number;
  color: { main: string; secondary: string };
}

export default function Monthly({
  classNames,
  year,
  month,
  blankdays,
  noOfDays,
  events,
  campaigns,
}: {
  classNames: any;
  blankdays: number[];
  noOfDays: number[];
  year: number;
  month: number;
  events: eventType[];
  campaigns: any;
}) {

  const rest = Array(42 - (noOfDays.length + blankdays.length)).fill(0);
  const [moreRows, setMoreRows] = useState(false);
  const [moreEvents, setMoreEvents] = useState<eventType[]>([]);

  const isToday = (date: number) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const isFutureDay = (date: number) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today <= d;
  };

  const getSameDateEvents = (eventsProp: eventType[], day: number) => {
    const sameDateEvents = eventsProp.filter((event) => {
      const startDay = new Date(event.start).getDate();
      const endDay = new Date(event.end).getDate();
      const startMonth = new Date(event.start).getMonth();
      const endMonth = new Date(event.end).getMonth();
      const startYear = new Date(event.start).getFullYear();
      const endYear = new Date(event.end).getFullYear();
      return (
        day === startDay &&
        month === startMonth &&
        year === startYear &&
        (isNaN(endDay) && isNaN(endMonth) && isNaN(endYear))
      ) || (
        day === startDay &&
        month === startMonth &&
        year === startYear &&
        (!isNaN(endDay) && !isNaN(endMonth) && !isNaN(endYear))
      ) || (
        endDay === day &&
        endMonth === month &&
        endYear === year
      ) || (
        startDay < day &&
        endDay > day &&
        startMonth <= month &&
        endMonth >= month
      )
    });
    return sameDateEvents;
  }
  
  const moreRowsClickHandler = (events: eventType[], day: number) => {
    const sameDateEvents = getSameDateEvents(events, day);
    setMoreEvents(sameDateEvents);
    setMoreRows(true);
  };

  const handleEventClick = (event: eventType) => {
    // const selectedCampaign = campaigns.find((campaign) => campaign.id === event.id);
    // setCampaign(selectedCampaign!);
    // router.push(`/campaign/calendar?id=${event.id}`);
  };

  return (
    <>
      <div className="shadow ring-1 h-full ring-black overflow-hidden rounded-b-lg ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-[gray-300] bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-white py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-white py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-white py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="bg-white py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="w-full grid grid-cols-7 grid-rows-6 gap-px">
            {blankdays.map((day: number) => (
              <div
                key={day}
                className="bg-white text-gray-500 relative px-3 py-2"
              >
              </div>
            ))}
            {noOfDays.map((day: number) => {
            const sameDateEvents = getSameDateEvents(events, day);
            return (
              <div
                key={day}
                className={classNames("bg-white", "relative px-3 py-2")}
              >
                {
                  isFutureDay(day) ? 
                    // <Modal type="calendar-create" date={`${year}-${month + 1}-${day}`} isOpen={false}>
                      <button
                        type="button"
                        className="cursor-pointer !border-none rounded-full h-8 w-8 items-center justify-center"
                      >
                        <time
                          className={isToday(day)
                            ? "flex h-8 w-8 items-center justify-center rounded-full p-4 bg-brand font-semibold text-white cursor-pointer"
                            : " mb-2 flex cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8 items-center justify-center"
                          }
                        > 
                          {day}
                        </time>
                      </button>
                    // </Modal>
                    :
                    <button
                      type="button"
                      className="cursor-pointer !border-none rounded-full h-8 w-8 items-center justify-center"
                    >
                      <time
                        className={isToday(day)
                          ? "flex h-8 w-8 items-center justify-center rounded-full p-4 bg-brand font-semibold text-white bg-primary-400 cursor-pointer"
                          : " mb-2 flex cursor-pointer hover:bg-gray-200 rounded-full h-8 w-8 items-center justify-center"
                        }
                      > 
                        {day}
                      </time>
                    </button>
                }
                <div className="flex flex-col gap-1 mt-2.5 max-h-[100px] no-scrollbar overflow-hidden absolute w-full left-0 bottom-0">
                  {sameDateEvents.slice(0, 2).map((event, index) => (
                    <EventItem
                      key={index}
                      event={event}
                      day={day}
                      month={month}
                      year={year}
                      campaigns={campaigns}
                    />
                  ))}
                   {/* <div className="relative">
                    {sameDateEvents.length > 2 && (
                      <MoreEventsRows 
                        moreRows={moreRows}
                        setMoreRows={setMoreRows}
                        events={moreEvents}
                        handleEventClick={handleEventClick}
                      >
                        <span className="font-semibold cursor-pointer px-2" onClick={() => moreRowsClickHandler(sameDateEvents.slice(2), day)}>
                          {sameDateEvents.length - 2 + " more"}
                        </span>
                      </MoreEventsRows>
                    )}
                  </div> */}
                </div>
              </div>
            )})}
            {rest.map((day: number, index: number) => (
              <div
                key={index}
                className={classNames(
                  "bg-white text-gray-500",
                  "relative px-3 py-2"
                )}
              > 
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function EventItem({
  event,
  day,
  month,
  year,
  campaigns,
}: {
  event: eventType;
  day: number;
  month: number;
  year: number;
  campaigns: any;
}) {

  const handleEventClick = () => {
  
  };


  const startDay = new Date(event.start).getDate();
  const endDay = new Date(event.end).getDate();
  const startMonth = new Date(event.start).getMonth();
  const endMonth = new Date(event.end).getMonth();
  const startYear = new Date(event.start).getFullYear();
  const endYear = new Date(event.end).getFullYear();

    if (day === startDay && month === startMonth && year === startYear) {
      // Checking if the end date NaN - no repeat
      if (isNaN(endDay) && isNaN(endMonth) && isNaN(endYear)) {
        return (
          <div
            onClick={handleEventClick}
            style={{
              backgroundColor: event.color.main,
              color: "white",
              overflow: "hidden",
            }}
            className="px-2 pt-0.5 text-xs mx-1 rounded-[0.3rem] cursor-pointer"
          >
            <span className="whitespace-nowrap inline-block pr-2 w-full overflow-hidden">
              {event.name}
            </span>
          </div>
        );  
      } else {
          return (
            <span
              onClick={handleEventClick}
              style={{
                backgroundColor: event.color.main,
                color: "white",
              }}
              className="px-2 py-0.5 text-xs ml-1 rounded-l-[0.3rem] cursor-pointer"
            >
            <span className="whitespace-nowrap inline-block pr-2 w-full overflow-hidden">
              {event.name}
            </span>
          </span>
        );
      }
    } else if (endDay === day && endMonth === month && endYear === year) {
      return (
        <span
          onClick={handleEventClick}
          style={{
            backgroundColor: event.color.main,
            color: event.color.main,
          }}
          className="px-2 py-0.5 text-xs rounded-r-[0.3rem] mr-1 hover:text-white cursor-pointer whitespace-nowrap"
        >
          {event.name}
        </span>
      );
    } else if (
      startDay < day &&
      endDay > day &&
      startMonth <= month &&
      endMonth >= month
    ) {
      return (
        <span
          onClick={handleEventClick}
          style={{
            backgroundColor: event.color.main,
            color: event.color.main,
          }}
          className="px-2 py-0.5 text-xs w-full cursor-pointer whitespace-nowrap"
        >
          {event.name}
        </span>
      );       
  }
  return null;
}

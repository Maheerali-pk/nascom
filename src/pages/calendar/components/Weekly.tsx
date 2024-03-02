interface eventType {
  name: string;
  id: string;
  start: number;
  end: number;
  color: { main: string; secondary: string };
}

export default function Weekly({
  year,
  month,
  events,
  days,
  campaigns,
}: {
  year: number;
  month: number;
  events: eventType[];
  days: number[];
  campaigns: any;
}) {
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

  return (
    <>
      <div className="shadow ring-1 h-full ring-black overflow-hidden rounded-b-lg ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 uppercase gap-px border-b border-gray-300 bg-gray-200 text-center text-base leading-6 text-gray-700 lg:flex-none">
          <div className="bg-white py-2 ">
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
          <div className="w-full grid grid-cols-7 grid-rows-1 gap-px">
            {days.map((day: number) => (
              <div key={day} className="bg-white relative px-3 h-full py-2">
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
                <div className="flex flex-col justify-start gap-1 mt-2.5 h-[90%] no-scrollbar overflow-y-scroll overflow-x-hidden absolute w-[100%] left-0">
                  {events.map((event) => (
                    <EventItem
                      event={event}
                      day={day}
                      month={month}
                      year={year}
                      key={event.id}
                      campaigns={campaigns}
                    />
                  ))}
                </div>
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

  if (day === startDay && startMonth === month && startYear === year) {
    if (isNaN(endDay) && isNaN(endMonth) && isNaN(endYear)) {
      return (
        <span
          onClick={handleEventClick}
          style={{
            backgroundColor: event.color.main,
          }}
          className="px-4 flex items-start py-2.5 text-sm h-full mx-1 text-white hover:text-white rounded-lg cursor-pointer"
        >
          {event.name}
        </span>
      );
    }
    return (
      <span
        onClick={handleEventClick}
        style={{
          backgroundColor: event.color.main,
          color: "white",
        }}
        className="px-4 flex items-start py-2.5 text-sm h-full ml-1 hover:text-white rounded-l-lg cursor-pointer"
      >
        {event.name}
      </span>
    );
  } else if (endDay === day && endMonth === month && endYear === year) {
    return (
      <span
        onClick={handleEventClick}
        style={{
          backgroundColor: event.color.main,
        }}
        className="px-4 flex items-start py-2.5 text-sm h-full mr-4 text-transparent hover:text-white rounded-r-lg cursor-pointer"
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
        }}
        className="px-4 flex items-start py-2.5 text-sm h-full w-full text-transparent hover:text-white cursor-pointer "
      >
        {event.name}
      </span>
    );
  }

  return null;
}

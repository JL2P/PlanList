import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import Calendar from "react-full-event-calendar";
import events from "./events";
const ProfileCalendarView = ({ selectUser, todos }) => {
  // const events = [{ title: "today's event", date: new Date() }];

//   const events = [
//     {
//       startTime: new Date(),
//       endTime: new Date(2020, 11, 30),
//       title: "working in the weekend",
//     },
//     {
//       startTime: new Date(moment().add(-3, "hour")),
//       endTime: new Date(moment().add(-2, "hour")),
//       title: "working in the weekend",
//     },
//     {
//       startTime: new Date(),
//       endTime: new Date(moment().add(1, "hour")),
//       title: "working in the weekend",
//     },
//   ];

  console.log("하이", selectUser.accountId);
  console.log(new Date());
  console.log(new Date(2020, 11, 30));
  //   console.log(new Date("Thu Nov 19 2020 18:25:04 GMT+0900").getFullYear() + 1);
  //   console.log(new Date("Thu Nov 19 2020 18:25:04 GMT+0900").getMonth() + 1);
  return (
    <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      events={events}
    />

    // <Calendar events={events} />
  );
};

export default ProfileCalendarView;

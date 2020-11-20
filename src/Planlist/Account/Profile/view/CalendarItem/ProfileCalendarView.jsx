import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const ProfileCalendarView = ({ selectUser, todos }) => {
  const events = [];
  todos.map((item) => {
    const end = new Date(item.endTime);
    end.setDate(end.getDate() + 1);
    const endTime =
      end.getFullYear() +
      "-" +
      (end.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      end.getDate().toString().padStart(2, "0");
    events.push({
      title: item.title,
      start: item.created.substring(0, 10),
      end: endTime,
      color: item.completed === "Y" ? "#CED4DA" : "#FFB517",
      url: "http://google.com/",
    });
  });

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

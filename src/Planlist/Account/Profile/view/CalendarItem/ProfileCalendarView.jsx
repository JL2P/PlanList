import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import MainItemInfoContainer from "../../../../Main/Container/MainItemInfoContainer";

const ProfileCalendarView = ({ selectUser, todos, selectedTodo }) => {
  const events = [];
  //   const [itemInfoOpen, setItemInfoOpen] = useState(false);

  todos.map((item) => {
    // const onInfoModal = (trigger) => {
    //   setItemInfoOpen(trigger);
    //   selectedTodo(item);
    // };
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
      start: item.startTime,
      end: endTime,
      color: item.completed === "Y" ? "#CED4DA" : "#FFB517",
      //   dateClick: (
      //     <MainItemInfoContainer
      //       todo={item}
      //       open={itemInfoOpen}
      //       onModal={onInfoModal}
      //     />
      //   ),
    });
  });
  return (
    <div>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      ></FullCalendar>
    </div>

    // <Calendar events={events} />
  );
};

export default ProfileCalendarView;

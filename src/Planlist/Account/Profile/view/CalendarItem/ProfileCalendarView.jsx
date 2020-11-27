import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const ProfileCalendarView = ({ selectUser, todos, selectedTodo, today }) => {
  const events = [];
  //   const [itemInfoOpen, setItemInfoOpen] = useState(false);
  // #CED4DA #FFF0CD
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
      title:
        // categoryList.find((cate) => cate.value === item.category).text +
        // " : " +
        item.title,
      start: item.startTime
        ? item.startTime
        : today > endTime
        ? endTime
        : today,
      end: endTime,
      color:
        item.completed === "Y"
          ? "#98895B" // 완료한 일
          : item.endTime < today
          ? "#CED4DA" // 하지 못한 일
          : "#FFB517", // 해야 할 일
      // url: "hi",
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

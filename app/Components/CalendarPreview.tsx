import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";



export default function CalendarPreview({ events, onDateClick, onEventClick }) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      dateClick={onDateClick}
      eventClick={(eventInfo) => {
        console.log("Event Info:", eventInfo.event); // Log event info
        onEventClick(eventInfo.event.id); // Use event.id
      }}
      editable={true}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridDay,timeGridWeek,dayGridMonth",
      }}
    />
  );
}

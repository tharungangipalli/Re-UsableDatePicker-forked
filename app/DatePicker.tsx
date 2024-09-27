"use client";

import { useState } from "react";
import CalendarPreview from "./Components/CalendarPreview";
import EventModal from "./Components/EventModal";
import DeleteConfirmationModal from "./Components/DeleteConfirmationModal";
import useDateStore from "./Components/useDateStore";
import RecurringOptions from "./Components/RecurringOptions";

export default function DatePicker() {
  const { allEvents, addNewEvent, deleteEvent } = useDateStore();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Date Picker</h1>
      </nav>
      <main className="flex flex-col items-center justify-between p-24 min-h-screen">
        <div className="flex w-full gap-8">
          <div className="flex-1">
            <CalendarPreview
              events={allEvents}
              onDateClick={() => setShowModal(true)}
              onEventClick={(eventId) => {
                setEventToDelete(eventId);
                setShowDeleteModal(true);
              }}
            />
          </div>

          <div className="w-1/3">
            <RecurringOptions />
          </div>
        </div>

        {showModal && (
          <EventModal
            onClose={() => setShowModal(false)}
            onSave={(eventData) => addNewEvent(eventData)}
          />
        )}

        {showDeleteModal && (
          <DeleteConfirmationModal
            eventId={eventToDelete}
            onConfirm={() => deleteEvent(eventToDelete)}
            onClose={() => setShowDeleteModal(false)}
          />
        )}
      </main>
    </>
  );
}

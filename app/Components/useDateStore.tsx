import { create } from "zustand";

const useDateStore = create((set) => ({
  allEvents: [],
  addNewEvent: (event) =>
    set((state) => ({
      allEvents: [...state.allEvents, { ...event, id: Date.now() }],
    })),
    deleteEvent: (eventId) =>
      set((state) => {
        console.log("Before deletion:", state.allEvents);
        const updatedEvents = state.allEvents.filter((event) => event.id !== eventId);
        console.log("After deletion:", updatedEvents);
        return { allEvents: updatedEvents };
      }),
}));

export default useDateStore;

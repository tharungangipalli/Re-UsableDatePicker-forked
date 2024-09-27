import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface EventModalProps {
  onClose: () => void;
  onSave: (eventData: {
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
  }) => void;
}

export default function EventModal({ onClose, onSave }: EventModalProps) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [end, setEnd] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ title, start: new Date(start), end: new Date(end), allDay });
    onClose();
  };

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Event Start
                    </label>
                    <input
                      type="datetime-local"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                      value={start}
                      onChange={(e) => setStart(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      Event End
                    </label>
                    <input
                      type="datetime-local"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
                      value={end}
                      onChange={(e) => setEnd(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">
                      <input
                        type="checkbox"
                        checked={allDay}
                        onChange={() => setAllDay(!allDay)}
                      />{" "}
                      All Day Event
                    </label>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded"
                    >
                      Save Event
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

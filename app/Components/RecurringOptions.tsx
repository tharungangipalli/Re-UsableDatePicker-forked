import { useState } from "react";

export default function RecurringOptions() {
  const [recurrence, setRecurrence] = useState({ type: "daily", custom: "" });

  const handleRecurrenceChange = (e) => {
    setRecurrence({ ...recurrence, type: e.target.value });
  };

  const recurrenceOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Recurrence Options</h2>

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Select Recurrence:
      </label>

      <select
        className="block w-full mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={recurrence.type}
        onChange={handleRecurrenceChange}
      >
        {recurrenceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

"use client";
import React, { useState } from "react";

const Datepicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <input
      type="date"
      className="border border-gray-200 h-12 p-3"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default Datepicker;

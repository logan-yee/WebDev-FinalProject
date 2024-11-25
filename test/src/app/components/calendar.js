"use client";

import React, { useState, useEffect } from "react";
import { format, startOfMonth, startOfWeek, addDays, addMonths, subMonths } from "date-fns";
import { PencilIcon, TrashIcon } from "lucide-react";

const Calendar = ({ reservations, onEdit, onDelete }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [gridSize, setGridSize] = useState(0);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const reservationColors = [
    "bg-orange-100 text-orange-700",
    "bg-blue-100 text-blue-700",
    "bg-green-100 text-green-700",
    "bg-yellow-100 text-yellow-700",
    "bg-purple-100 text-purple-700",
  ];

  useEffect(() => {
    const updateGridSize = () => {
      const calendarWidth = Math.min(window.innerWidth, 800); 
      setGridSize(calendarWidth / 7); 
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  const getDaysInMonth = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = addDays(startDate, 34); 
    const days = [];
    let date = startDate;

    while (date <= endDate) {
      days.push(date);
      date = addDays(date, 1);
    }

    return days;
  };

  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const renderDayGrid = () => {
    const days = getDaysInMonth();

    return days.map((day, index) => {
      const isCurrentMonth = day.getMonth() === currentMonth.getMonth();

      const dayReservations = reservations
        .filter((res) => format(res.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd"))
        .sort((a, b) => a.time.localeCompare(b.time));

      return (
        <div
          key={index}
          className={`relative border border-gray-300 bg-white ${
            isCurrentMonth ? "text-gray-900" : "text-gray-400"
          }`}
          style={{ width: gridSize, height: gridSize }}
        >
          <div className="absolute top-2 right-2 text-sm font-semibold">{format(day, "d")}</div>

          {/* Reservations */}
          <div className="pt-6 space-y-1">
            {dayReservations.map((res, idx) => (
              <div
                key={idx}
                className={`rounded-md p-1 text-xs truncate flex justify-between items-center ${
                  reservationColors[idx % reservationColors.length]
                }`}
                title={`${res.name} at ${res.time}`}
              >
                <div>
                  <span className="block font-medium">{res.name}</span>
                  <span className="block text-xs">{res.time}</span>
                </div>
                <div className="flex flex-col space-y-1 ml-2">
                  {/* Edit Button */}
                  <button
                    className="p-1 rounded-full hover:bg-gray-100"
                    onClick={() => onEdit(res)}
                  >
                    <PencilIcon className="h-4 w-4 text-gray-700" />
                  </button>
                  {/* Delete Button */}
                  <button
                    className="p-1 rounded-full hover:bg-red-100"
                    onClick={() => onDelete(res)}
                  >
                    <TrashIcon className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-amber-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition"
          >
            &larr;
          </button>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {format(currentMonth, "MMMM yyyy")}
          </h2>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 transition"
          >
            &rarr;
          </button>
        </div>

        {/* Days of the Week */}
        <div
          className="grid grid-cols-7 gap-0 text-center font-medium text-gray-600 mb-2"
          style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
        >
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="flex items-center justify-center border-b border-gray-300"
              style={{ height: gridSize * 0.3 }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div
          className="grid grid-cols-7 gap-0"
          style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
        >
          {renderDayGrid()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;

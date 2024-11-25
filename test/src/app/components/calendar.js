"use client";

import React, { useState, useEffect } from "react";
import { format, startOfMonth, startOfWeek, addDays, addMonths, subMonths } from "date-fns";
import { PencilIcon, TrashIcon } from "lucide-react";

const Calendar = ({ reservations, onEdit, onDelete }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [gridSize, setGridSize] = useState(0);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const reservationColors = ["bg-blue-600", "bg-green-600", "bg-yellow-600", "bg-purple-600", "bg-red-600"];

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
          style={{ width: gridSize, minHeight: gridSize }}
          className={`relative border border-gray-500 ${
            isCurrentMonth ? "text-white" : "text-gray-400"
          }`}
        >
          {/* Date in top-right corner */}
          <div className="absolute top-2 right-2 text-sm">{format(day, "d")}</div>

          {/* Reservations */}
          <div
            className="pt-6 space-y-1"
            style={{
              paddingTop: `${gridSize * 0.3}px`,
            }}
          >
            {dayReservations.map((res, idx) => (
              <div
                key={idx}
                className={`rounded-md p-1 text-xs text-white truncate flex justify-between items-center ${
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
                    className="p-1 rounded-full hover:bg-gray-700"
                    onClick={() => onEdit(res)}
                  >
                    <PencilIcon className="h-3 w-3 text-white" />
                  </button>
                  {/* Delete Button */}
                  <button
                    className="p-1 rounded-full hover:bg-red-500"
                    onClick={() => onDelete(res)}
                  >
                    <TrashIcon className="h-3 w-3 text-white" />
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
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full max-w-5xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPreviousMonth}
            className="p-2 bg-zinc-700 hover:bg-gray-600 rounded-lg"
          >
            &larr;
          </button>
          <h2 className="text-2xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
          <button
            onClick={goToNextMonth}
            className="p-2 bg-zinc-700 hover:bg-gray-600 rounded-lg"
          >
            &rarr;
          </button>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 text-center font-medium text-gray-400 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              style={{ width: gridSize, height: gridSize * 0.3 }}
              className="flex items-center justify-center border-b border-gray-500"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-1">{renderDayGrid()}</div>
      </div>
    </div>
  );
};

export default Calendar;

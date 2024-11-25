"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";

const ReservationModal = ({ isOpen, onClose, onSubmit, date, time, name, specialAccommodations }) => {
  const [formDate, setFormDate] = useState(date || null);
  const [formTime, setFormTime] = useState(time || "");
  const [formName, setFormName] = useState(name || "");
  const [formSpecialAccommodations, setFormSpecialAccommodations] = useState(specialAccommodations || "");

  useEffect(() => {
    // Update form fields when modal is opened with new data (e.g., for editing)
    setFormDate(date || null);
    setFormTime(time || "");
    setFormName(name || "");
    setFormSpecialAccommodations(specialAccommodations || "");
  }, [date, time, name, specialAccommodations]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDate || !formTime || !formName) {
      alert("Please fill in all required fields.");
      return;
    }

    onSubmit({
      date: formDate,
      time: formTime,
      name: formName,
      specialAccommodations: formSpecialAccommodations,
    });

    // Reset form and close modal
    setFormDate(null);
    setFormTime("");
    setFormName("");
    setFormSpecialAccommodations("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {name ? "Edit Reservation" : "Create Reservation"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="w-full justify-start text-left font-normal text-white bg-neutral-800 hover:bg-neutral-800"
                >
                  {formDate ? format(formDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-5 w-5 opacity-50 text-white" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-neutral-900 ">
                <Calendar
                  mode="single"
                  selected={formDate}
                  onSelect={setFormDate} 
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time</label>
            <div className="relative">
              <input
                type="time"
                className="w-full bg-neutral-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500"
                value={formTime}
                onChange={(e) => setFormTime(e.target.value)} 
                required
              />
              <ClockIcon className="absolute top-1/2 transform -translate-y-1/2 right-4 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-neutral-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Name of Reservation"
              value={formName}
              onChange={(e) => setFormName(e.target.value)} 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Special Accommodations
            </label>
            <textarea
              className="w-full bg-neutral-800 text-white rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter any special requests"
              value={formSpecialAccommodations}
              onChange={(e) => setFormSpecialAccommodations(e.target.value)} 
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;

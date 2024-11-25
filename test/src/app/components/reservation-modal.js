"use client";

import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Calendar } from "@/app/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";

const ReservationModal = ({ isOpen, onClose, onSubmit, date, time, name, specialAccommodations }) => {
  const [formDate, setFormDate] = useState(date || null);
  const [formTime, setFormTime] = useState(time || "");
  const [formName, setFormName] = useState(name || "");
  const [formSpecialAccommodations, setFormSpecialAccommodations] = useState(specialAccommodations || "");

  useEffect(() => {
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

    setFormDate(null);
    setFormTime("");
    setFormName("");
    setFormSpecialAccommodations("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-amber-50 text-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6">
          {name ? "Edit Reservation" : "Create Reservation"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Date Picker */}
          <div>
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  className="w-full justify-start text-left font-medium bg-white border border-gray-300 text-gray-900 rounded-md px-4 py-2 hover:bg-gray-50 transition"
                >
                  {formDate ? format(formDate, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-5 w-5 opacity-50 text-gray-600" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white border border-gray-300 rounded-md">
                <Calendar
                  mode="single"
                  selected={formDate}
                  onSelect={setFormDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Input */}
          <div>
            <Label htmlFor="time">Time</Label>
            <div className="relative">
              <Input
                id="time"
                type="time"
                className="w-full bg-white text-gray-900 rounded-md px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 transition"
                value={formTime}
                onChange={(e) => setFormTime(e.target.value)}
                required
              />
              <ClockIcon className="absolute top-1/2 transform -translate-y-1/2 right-4 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Name Input */}
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Name of Reservation"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              required
            />
          </div>

          {/* Special Accommodations Input */}
          <div>
            <Label htmlFor="special-accommodations">Special Accommodations</Label>
            <textarea
              id="special-accommodations"
              className="w-full bg-white text-gray-900 rounded-md px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400 transition"
              placeholder="Enter any special requests"
              value={formSpecialAccommodations}
              onChange={(e) => setFormSpecialAccommodations(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md transition"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationModal;

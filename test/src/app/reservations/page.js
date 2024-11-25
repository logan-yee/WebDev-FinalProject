"use client";

import React, { useState } from "react";
import Image from "next/image";
import Calendar from "../components/calendar";
import ReservationModal from "../components/reservation-modal";
import { Button } from "@/app/components/ui/button";

const Reservations = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);

  const addOrUpdateReservation = (reservation) => {
    if (editingReservation) {
      setReservations((prevReservations) =>
        prevReservations.map((res) =>
          res === editingReservation ? reservation : res
        )
      );
      setEditingReservation(null);
    } else {
      // Add new reservation
      setReservations([...reservations, reservation]);
    }
  };

  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
    setModalOpen(true);
  };

  const handleDelete = (reservation) => {
    setReservations((prevReservations) =>
      prevReservations.filter((res) => res !== reservation)
    );
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Banner Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="Reservations at Naan Stop Wok"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Book Your Table
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Reserve your spot and enjoy the perfect dining experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Reservations</h2>
          <Button
            onClick={() => {
              setEditingReservation(null);
              setModalOpen(true);
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-full"
          >
            Add Reservation
          </Button>
        </div>

        {/* Calendar */}
        <Calendar
          reservations={reservations}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={addOrUpdateReservation}
        date={editingReservation?.date || null}
        time={editingReservation?.time || ""}
        name={editingReservation?.name || ""}
        specialAccommodations={editingReservation?.specialAccommodations || ""}
      />
    </div>
  );
};

export default Reservations;

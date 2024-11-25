"use client";

import React, { useState } from "react";
import Calendar from "../components/calendar";
import ReservationModal from "../components/reservation-modal";
import { Button } from "@/app/components/ui/button";

const Reservations = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [editingReservation, setEditingReservation] = useState(null);

  const addOrUpdateReservation = (reservation) => {
    if (editingReservation) {
      // Update existing reservation
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="flex justify-between w-full max-w-5xl p-6">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <Button
          onClick={() => {
            setEditingReservation(null); 
            setModalOpen(true);
          }}
          className="bg-zinc-600 hover:bg-zinc-700 text-white"
        >
          Add Reservation
        </Button>
      </div>

      <Calendar
        reservations={reservations}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

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

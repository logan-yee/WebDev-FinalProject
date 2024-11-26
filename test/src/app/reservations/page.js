"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Calendar from "../components/calendar";
import ReservationModal from "../components/reservation-modal";
import AlertModal from "../components/AlertModal"; // Import the custom AlertModal component
import { Button } from "@/app/components/ui/button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/config/firebase";
import { db } from "@/app/config/firebase";
import {collection,query,where,onSnapshot,addDoc,deleteDoc,doc,} from "firebase/firestore";

const Reservations = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Reservation modal state
  const [isAlertOpen, setAlertOpen] = useState(false); // Alert modal state
  const [alertMessage, setAlertMessage] = useState(""); // Message for alert modal
  const [reservations, setReservations] = useState([]); // Reservation list
  const [editingReservation, setEditingReservation] = useState(null); // Reservation being edited
  const [user, setUser] = useState(null); // Authenticated user

  const reservationsCollection = collection(db, "reservations"); // Firestore collection reference

  // Check user authentication status
  useEffect(() => {
    // Set up an auth listener to track the logged-in user
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
  
      if (currentUser) {
        // Firestore query for reservations tied to the logged-in user
        const q = query(
          collection(db, "reservations"), // Ensure the path to your Firestore collection is correct
          where("uid", "==", currentUser.uid) // Match only the current user's reservations
        );
  
        // Firestore listener for real-time updates
        const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
          const userReservations = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            date: new Date(doc.data().date), // Convert ISO string to Date object
          }));
  
          // Ensure only unique reservations are added to state
          const uniqueReservations = userReservations.filter(
            (res, index, self) =>
              index ===
              self.findIndex((r) => r.date.getTime() === res.date.getTime() && r.time === res.time)
          );
  
          setReservations(uniqueReservations);
        });
  
        // Cleanup Firestore listener on unmount
        return () => unsubscribeFirestore();
      } else {
        // Clear reservations if no user is logged in
        setReservations([]);
      }
    });
  
    // Cleanup auth listener on unmount
    return () => unsubscribeAuth();
  }, []);
  

  // Add or update a reservation
  const addOrUpdateReservation = async (reservation) => {
    if (editingReservation) {
      // Update reservation locally
      setReservations((prevReservations) =>
        prevReservations.map((res) =>
          res.id === editingReservation.id ? reservation : res
        )
      );
      setEditingReservation(null);
    } else {
      try {
        // Add new reservation to Firestore
        const docRef = await addDoc(reservationsCollection, {
          uid: user.uid,
          date: reservation.date.toISOString(),
          time: reservation.time,
          name: reservation.name,
          specialAccommodations: reservation.specialAccommodations || "None",
        });

        // Update the local state to show the new reservation
        setReservations((prevReservations) => [
          ...prevReservations,
          { id: docRef.id, ...reservation },
        ]);
      } catch (error) {
        console.error("Error adding reservation:", error);
        setAlertMessage("Failed to save reservation. Please try again.");
        setAlertOpen(true);
      }
    }
  };

  // Handle editing a reservation
  const handleEdit = (reservation) => {
    setEditingReservation(reservation);
    setModalOpen(true);
  };

  // Handle deleting a reservation
  const handleDelete = async (reservation) => {
    try {
      await deleteDoc(doc(db, "reservations", reservation.id)); // Delete from Firestore
      setReservations((prevReservations) =>
        prevReservations.filter((res) => res.id !== reservation.id)
      );
    } catch (error) {
      console.error("Error deleting reservation:", error);
      setAlertMessage("Failed to delete reservation. Please try again.");
      setAlertOpen(true);
    }
  };

  // Handle adding a new reservation
  const handleAddReservationClick = () => {
    if (!user) {
      setAlertMessage("Please sign in to make a reservation.");
      setAlertOpen(true);
      return;
    }
    setEditingReservation(null);
    setModalOpen(true);
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
            onClick={handleAddReservationClick}
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
        user={user} // Pass the user object
      />

      {/* Alert Modal */}
      <AlertModal
        isOpen={isAlertOpen}
        onClose={() => setAlertOpen(false)}
        message={alertMessage}
      />
    </div>
  );
};

export default Reservations;

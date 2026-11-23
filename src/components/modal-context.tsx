"use client";

import React, { createContext, useContext, useState } from "react";
import { AppointmentModal } from "./appointment-modal";
import { MobileActionBar } from "./mobile-bar";

interface ModalContextType {
  openAppointment: (defaultSalon?: string) => void;
  closeAppointment: () => void;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState<string | undefined>(undefined);

  const openAppointment = (salon?: string) => {
    setSelectedSalon(salon);
    setAppointmentOpen(true);
  };

  const closeAppointment = () => {
    setAppointmentOpen(false);
  };

  const openCommandPalette = () => {};
  const closeCommandPalette = () => {};

  return (
    <ModalContext.Provider
      value={{
        openAppointment,
        closeAppointment,
        openCommandPalette,
        closeCommandPalette,
      }}
    >
      {children}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={closeAppointment}
        initialSalon={selectedSalon}
      />
      <MobileActionBar onOpenAppointment={() => openAppointment()} />
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}

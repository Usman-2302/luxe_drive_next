"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ServiceType = "airport" | "hotel" | "corporate" | "wedding" | "tour" | "";

export interface BookingState {
    serviceId: ServiceType;
    vehicleId: string;
    chauffeurId: string;
    pickup: string;
    destination: string;
    date: string;
    time: string;
    flightNumber?: string;
    specialRequests: string;
    isConfirmed: boolean;
}

const initialState: BookingState = {
    serviceId: "",
    vehicleId: "",
    chauffeurId: "",
    pickup: "",
    destination: "",
    date: "",
    time: "",
    flightNumber: "",
    specialRequests: "",
    isConfirmed: false,
};

interface BookingContextType {
    state: BookingState;
    updateState: (updates: Partial<BookingState>) => void;
    resetState: () => void;
    setConfirmed: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<BookingState>(initialState);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load from sessionStorage on mount
    useEffect(() => {
        const saved = sessionStorage.getItem("luxe_drive_booking");
        if (saved) {
            try {
                setState(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse booking state", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save to sessionStorage on update
    useEffect(() => {
        if (isInitialized) {
            sessionStorage.setItem("luxe_drive_booking", JSON.stringify(state));
        }
    }, [state, isInitialized]);

    const updateState = (updates: Partial<BookingState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    };

    const resetState = () => {
        setState(initialState);
        sessionStorage.removeItem("luxe_drive_booking");
    };

    const setConfirmed = () => {
        updateState({ isConfirmed: true });
        // Final clear happen after transition to success
    };

    return (
        <BookingContext.Provider value={{ state, updateState, resetState, setConfirmed }}>
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (context === undefined) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}

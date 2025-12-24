"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

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
    fullName: string;
    email: string;
    phone: string;
    passengers: number;
    notes: string;
    isConfirmed: boolean;
    selectedAddons: string[];
    quotedPrice?: number;
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
    fullName: "",
    email: "",
    phone: "",
    passengers: 1,
    notes: "",
    isConfirmed: false,
    selectedAddons: [],
    quotedPrice: undefined,
};

interface BookingContextType {
    state: BookingState;
    updateState: (updates: Partial<BookingState>) => void;
    resetState: () => void;
    setConfirmed: () => void;
    isInitialized: boolean;
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

    const updateState = useCallback((updates: Partial<BookingState>) => {
        setState((prev) => ({ ...prev, ...updates }));
    }, []);

    const resetState = useCallback(() => {
        setState(initialState);
        sessionStorage.removeItem("luxe_drive_booking");
    }, []);

    const setConfirmed = useCallback(() => {
        updateState({ isConfirmed: true });
        // Final clear happen after transition to success
    }, [updateState]);

    return (
        <BookingContext.Provider value={{ state, updateState, resetState, setConfirmed, isInitialized }}>
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

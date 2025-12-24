import { ID } from 'appwrite';
import { databases, APPWRITE_CONFIG } from './appwrite';
import { BookingState } from '@/components/booking/BookingContext';

export type BookingPayload = Omit<BookingState, 'isConfirmed'> & {
    createdAt: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
};

export async function createBooking(state: BookingState) {
    try {
        const payload: BookingPayload = {
            serviceId: state.serviceId,
            vehicleId: state.vehicleId,
            chauffeurId: state.chauffeurId,
            pickup: state.pickup,
            destination: state.destination,
            date: state.date,
            time: state.time,
            flightNumber: state.flightNumber || '',
            specialRequests: state.specialRequests || '',
            fullName: state.fullName,
            email: state.email,
            phone: state.phone,
            passengers: state.passengers,
            notes: state.notes || '',
            selectedAddons: state.selectedAddons || [],
            quotedPrice: state.quotedPrice || 0,
            createdAt: new Date().toISOString(),
            status: 'pending',
        };

        const response = await databases.createDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.bookingsCollectionId,
            ID.unique(),
            payload
        );

        return response;
    } catch (error) {
        console.error('Appwrite Service Error:', error);
        throw error;
    }
}

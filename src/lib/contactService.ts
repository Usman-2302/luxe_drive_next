import { ID } from 'appwrite';
import { databases, APPWRITE_CONFIG } from './appwrite';

export interface ContactPayload {
    firstName: string;
    lastName: string;
    email: string;
    reason: string;
    message: string;
    createdAt?: string;
    status?: 'new' | 'read' | 'replied';
}

export async function createContactRequest(data: ContactPayload) {
    try {
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            reason: data.reason,
            message: data.message,
            createdAt: new Date().toISOString(),
            status: 'new',
        };

        const response = await databases.createDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.contactCollectionId,
            ID.unique(),
            payload
        );

        return response;
    } catch (error) {
        console.error('Appwrite Contact Service Error:', error);
        throw error;
    }
}

import { ID } from 'appwrite';
import { databases, APPWRITE_CONFIG } from './appwrite';

export interface SubscriptionPayload {
    email: string;
    createdAt?: string;
    status?: 'active' | 'unsubscribed';
}

export async function subscribeToNewsletter(email: string) {
    try {
        const payload: SubscriptionPayload = {
            email: email,
            createdAt: new Date().toISOString(),
            status: 'active',
        };

        const response = await databases.createDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.subscriptionCollectionId,
            ID.unique(),
            payload
        );

        return response;
    } catch (error) {
        console.error('Appwrite Subscription Service Error:', error);
        throw error;
    }
}

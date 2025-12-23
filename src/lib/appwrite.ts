import { Client, Databases } from 'appwrite';

const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
    console.error("Appwrite environment variables missing!");
}

client
    .setEndpoint(endpoint || '')
    .setProject(projectId || '');

export const databases = new Databases(client);
export const APPWRITE_CONFIG = {
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
    bookingsCollectionId: process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS_COLLECTION_ID || '',
    contactCollectionId: process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID || '',
    subscriptionCollectionId: process.env.NEXT_PUBLIC_APPWRITE_SUBSCRIPTIONS_COLLECTION_ID || '',
};

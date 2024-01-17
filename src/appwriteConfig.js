import { Client, Databases, Account } from "appwrite";

// export const PROJECT_ID = "656a92610c001a2ce035"
// export const DATABASE_ID = "656aad7926e584492d0c"
// export const COLLECTION_ID_MESSAGES = "656aad8ec06bfc5e28e4"

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656a92610c001a2ce035');

    export const account = new Account(client);
    export const databases = new Databases(client);

export default client;



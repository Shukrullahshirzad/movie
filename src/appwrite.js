const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)


const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    // 1. use appwrite sdk to check if the search term exist in the database
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm), 
        ])
        if (result.documents.lenght > 0) {
            const doc = result.documents[0];
        }
    } catch {
        
    }
    // 2. if it does, updata the count


    // 3. if it does not, create a new document with the search term and count as 1
    
}
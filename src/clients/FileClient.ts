import 'firebase/storage'
import { Database, Store } from '@/clients/BaseSetup'
import firebase            from 'firebase'

/**
 * The FileClient class provides methods to interact with the file storage and handle file-related operations.
 */
export class FileClient
{
    /**
     * Uploads a file to the file storage.
     *
     * @param {string} path - The path where the file should be stored in the file storage.
     * @param {File} file - The file to be uploaded.
     * @returns {Promise<boolean>} - A Promise that resolves to true if the upload is successful, or false if there's an error.
     */
    public static async upload(path: string, file: File): Promise<boolean>
    {
        const uploadTaskSnapshot = await Store.child(path).put(file)

        if (uploadTaskSnapshot.state !== 'success') {
            return false
        }

        await Database.ref(path)
                      .child('0')
                      .set(await uploadTaskSnapshot.ref.getDownloadURL())

        return true
    }

    /**
     * Retrieves the source URL for a file from the file storage.
     *
     * @param {string} path - The path of the file in the file storage.
     * @param {Function} callback - A function to handle the retrieved file URL.
     * @returns {Function} - A function to detach the event listener.
     */
    public static getImageUrl(path: string, callback: Function): (data: firebase.database.DataSnapshot | null) => void
    {
        return Database.ref(path)
                       .child('0')
                       .on('value', snapshot => callback(snapshot.val()))
    }
}
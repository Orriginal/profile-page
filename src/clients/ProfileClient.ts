import 'firebase/database'
import { Database } from '@/clients/BaseSetup'
import firebase     from 'firebase/app'

export type ProfileDataObject = {
    name: string,
    email: string,
    address: string,
    phoneNumber: string
}

/**
 * ProfileClient class handles profile data operations to the database.
 *
 */
export class ProfileClient
{
    /**
     * Get the realtime user profile data.
     *
     * @param callback - A callback function to handle the retrieved profile data.
     * @returns callback where first parameter will
     */
    public static getProfile(callback: Function): (data: firebase.database.DataSnapshot | null) => any
    {
        return Database.ref('profile')
                       .child('0')
                       .on('value', snapshot => callback(snapshot.val()))
    }

    /**
     * Update the user profile.
     *
     * @param profileData - New profile data to update.
     * @returns A promise that resolves when the profile is updated.
     */
    public static async updateProfile(profileData: ProfileDataObject): Promise<void>
    {
        await Database.ref('profile')
                      .child('0')
                      .set(profileData)
    }
}
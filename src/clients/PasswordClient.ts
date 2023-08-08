import 'firebase/database'

export type PasswordDataObject = {
    oldPassword: string,
    newPassword: string,
    repeatNewPassword: string,
}

// Typically, a production application would include a class with password management functionality. However, for the purpose of this illustrative example, we'll omit that complexity.
// It's essential to prioritize security by implementing a robust authentication system in a real-world scenario. In this particular example, the focus is not on authentication integration.
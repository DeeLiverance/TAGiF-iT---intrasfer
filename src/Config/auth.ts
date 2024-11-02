// Google OAuth configuration
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

if (!GOOGLE_CLIENT_ID) {
  throw new Error('Google Client ID is not configured. Please set VITE_GOOGLE_CLIENT_ID in your .env file.');
}
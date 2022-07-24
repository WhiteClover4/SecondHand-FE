import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '.';

export const getUserDataWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(getAuth(app), new GoogleAuthProvider())
      .then((result) => resolve(result.user))
      .catch((error) => reject(error.message));
  });
};

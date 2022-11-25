import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import firebaseApp from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(firebaseApp);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // ? create new user
  const registerEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ? update user profile
  const updateUserProfile = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  // ? google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // ? signInWithEmailAndPassword
  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ? sign out
  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {})
      .catch((err) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setLoading(false);
      setUser(current);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        googleProvider,
        registerEmailAndPassword,
        updateUserProfile,
        googleSignIn,
        loading,
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UserContext;

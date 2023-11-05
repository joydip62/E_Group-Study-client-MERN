/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

// google provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);


  // google sign in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const handleUpdateProfile = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };



  //  log in
  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout 
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  // save user details
  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unSubscriber()
    }
  },[])
  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    handleUpdateProfile,
    userLogIn,
    logout,
  };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
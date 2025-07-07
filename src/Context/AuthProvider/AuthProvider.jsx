import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true)

     const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const signInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const logOut = () =>{
        setLoading(true)
        return signOut(auth)
     }

     const updateUserProfile = profileInfo =>{
           return updateProfile(auth.currentUser , profileInfo)
     }

     const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
     }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
           setUser(currentUser)
           console.log('User in the auth state changed',currentUser);
           setLoading(false)

        });
        return () => {
            unSubscribe();
        }
    },[])


     const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle,
        updateUserProfile
        
     }
    return (
       <AuthContext value={authInfo}>
          {children}
       </AuthContext>
    );
};

export default AuthProvider;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

 export const AuthContext =createContext(null);

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loding,setLoding] =useState(true);

    const createUser =(email,password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn = ()=>{
        return signInWithPopup(auth,provider)
    }
    const githubSignIn = ()=>{
        return signInWithPopup(auth,githubProvider)
    }
    const signIn = (email,password)=>{
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth);
    }
    // observer user auth stage
    useEffect(()=>{
       const unsubscribe =   onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoding(false);
         });
         return ()=>{
            return unsubscribe();
         }
         } , [])
    const authInfo ={
        user,
        loding,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
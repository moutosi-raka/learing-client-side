import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext =  createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const googleSignIn = (googleProvider) =>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, googleSignIn,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}



export const AuthProvider = ({ children }) => {

const [currentUser, setCurrentUser] = useState("")

function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })
    return unsubscribe
}, [])



const value = {
    currentUser,
    signin
}

    return (  
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
}
 
import { GoogleAuthProvider, browserSessionPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();



    //create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    //sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };


    //Google login
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    //log out

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         if (currentUser) {
    //             // get token and store client
    //             const userInfo = { email: currentUser.email };
    //             axiosPublic.post('/jwt', userInfo)
    //                 .then(res => {
    //                     if (res.data.token) {
    //                         localStorage.setItem('access-token', res.data.token);
    //                         setLoading(false);
    //                     }
    //                 })
    //         }
    //         else {
    //             // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
    //             localStorage.removeItem('access-token');
    //             setLoading(false);
    //         }

    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [axiosPublic])

    useEffect(() => {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                const unSubscribe = onAuthStateChanged(auth, currentUser => {
                    setUser(currentUser);
                    setLoading(false);
                });
                return () => {
                    unSubscribe();
                };
            })
            .catch((error) => {
                console.error("Error setting session persistence:", error);
            });
    }, []);




    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
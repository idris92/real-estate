import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth,db} from '@/firebase'
import { addDoc, doc, getDoc, setDoc } from "firebase/firestore";


export const OauthContext = createContext();

export const OauthContextProvider =({children})=>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(undefined)

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsAuthenticated(true)
                setUser(user)
                updateUserData(user.uid)
            }else{
                setIsAuthenticated(false)
                setUser(null)
            }
        })
        return unSub
    }, [])


    const updateUserData=async(userId)=>{
        const docRef = doc(db,'users',userId);
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
            let data = docSnap.data()
            setUser({...user, username: data.username, profileUrl: data.profileUrl, userId: data.userId})
        }
    }

    const login = async(email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password).then((res)=>{
                return {success:true}
            }).catch((error)=>{
                let msg = error.message 
                if(msg.includes('(auth/invalid-credential)')) msg='Invalid credentials'
                if(msg.includes('(auth/too-many-requests)')) msg='Too many requests'
                if(msg.includes('(auth/invalid-email)')) msg='Invalid email address'
                if(msg.includes('(auth/network-request-failed)')) msg='Oops something went wrong, retry'
                return {success:false, msg}
            })
        
            
        } catch (error) {
            let msg = error.message
            if(msg.includes('(auth/invalid-email)')) msg='Invalid email address'
            if(msg.includes('(auth/invalid-credential)')) msg='Invalid credentials'
            if(msg.includes('(auth/network-request-failed)')) msg='Oops something went wrong, retry'
            return {success:false, error}
        }
    }

    const logout = async()=>{
        try {
            await signOut(auth)
            return {success: true}
            
        } catch (error) {
            return {success: false, msg:error.message}
        }
    }

    const register = async(email, password, username, profileUrl)=>{
        try {

            const response = await createUserWithEmailAndPassword(auth, email, password)

            const docRef = doc(db, 'users', response?.user?.uid)
            await setDoc(docRef, {
                username,
                profileUrl,
                userId: response?.user?.uid
            })
            return {success: true, data: response?.user}
            
        } catch (error) {
            let msg = error.message
            if(msg.includes('(auth/invalid-email)')) msg='Invalid email address'
            if(msg.includes('(auth/network-request-failed)')) msg='Oops something went wrong, retry'
            if(msg.includes('(auth/email-already-in-use)')) msg='Email already exist'
            return {success:false, msg}
        }
    }

    return (
        <OauthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {
                children
            }
        </OauthContext.Provider>
    )

}

export const useAuth=()=>{
    const value = useContext(OauthContext)

    if(!value){
        throw new Error('useAuth must be wrapped inside OauthContextProvider')
    }
    return value
}

import { useContext, useEffect } from "react";
import { createContext, useState } from "react";


export const OauthContext = createContext();

export const OauthContextProvider =({children})=>{
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
     
    }, [])

    const login = async(email, password)=>{
        try {
            
        } catch (error) {
            
        }
    }

    const logout = async()=>{
        try {
            
        } catch (error) {
            
        }
    }

    const register = async(email, password, username, profileUrl)=>{
        try {
            
        } catch (error) {
            
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

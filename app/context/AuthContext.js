import { View, Text, SafeAreaView } from 'react-native'
import { useContext, createContext, useState, useEffect } from "react";
import { account } from '@/lib/appwriteConfig';
import Loading from '@/components/Loading';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(false);
    const [user, setUser] = useState(null);


    useEffect(() => {
        init()
    }, [])
    

    const init= async ()=>{
        checkAuth()
    }

    const checkAuth= async ()=>{
            try {
                const sessionResponse = await account.getSession('current')
                setSession(sessionResponse)
                const userResponse = await account.get()
                setUser(userResponse)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
    }

    const signin = async ({email, password}) => {
        setLoading(true)
        try {
            const sessionResponse = await account.createEmailPasswordSession(email, password)
            setSession(sessionResponse)
            const userResponse = await account.get()
            setUser(userResponse)
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
        
    };
    const signout = async () => {
        setLoading(true);
        await account.deleteSession('current');
        setSession(null);
        setUser(null);
        setLoading(false);
    };

    const contextData = { session, user, signin, signout };

  return (
     <AuthContext.Provider value={contextData}>
            {loading ? (
                <SafeAreaView className='flex justify-center items-center'>
                        <Loading/>
                    {/* <Text>Loading...</Text> */}
                </SafeAreaView>
            ) : (
                children
                
            )}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
    return useContext(AuthContext);
};

export { useAuth, AuthContext, AuthProvider };
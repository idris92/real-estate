import { router, SplashScreen, Stack, useSegments } from "expo-router";
import "./globals.css"
import {useFonts} from 'expo-font'
import { useEffect } from "react";
import {useAuth} from "./context/oauthContext"
import { OauthContextProvider } from "./context/oauthContext";



const Mainlayout = ()=>{
  const {isAuthenticated} = useAuth()
  const segments = useSegments()

  useEffect(() => {
    if(typeof isAuthenticated == 'undefined')return;
    const inApp = segments[0]=='(root)'

    if(isAuthenticated && !inApp){
      //redirect to home
      router.replace('/(root)/(tabs)')
    }else if(isAuthenticated == false){
      //redirect to login page
      router.replace('/sign-in')
    }
  }, [isAuthenticated])
  
    return <Stack screenOptions={{headerShown:false}} />
}


export default function RootLayout() {

  const [loaded, error] = useFonts({
    "Rubik-Bold": require('../assets/fonts/Rubik-Bold.ttf'),
    "Rubik-ExtraBold": require('../assets/fonts/Rubik-ExtraBold.ttf'),
    "Rubik-Light": require('../assets/fonts/Rubik-Light.ttf'),
    "Rubik-Medium": require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('../assets/fonts/Rubik-Regular.ttf'),
    "Rubik-SemiBold": require('../assets/fonts/Rubik-SemiBold.ttf'),
  });

  useEffect(() => {
    if(loaded){
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if(!loaded){
    return null
  }
  
  return (
    <OauthContextProvider>
        <Mainlayout/>
    </OauthContextProvider>
  )
    
}

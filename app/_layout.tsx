import { SplashScreen, Stack } from "expo-router";
import "./globals.css"
import {useFonts} from 'expo-font'
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

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
    <AuthProvider>
      <Stack screenOptions={{headerShown:false}} />
    </AuthProvider>
  )
    
}

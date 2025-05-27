import { View, Text,Image, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import { router } from "expo-router";
import { useAuth } from './context/oauthContext'
import CustomKeyboardView from '@/components/CustomKeyboardView'
import LottieView from 'lottie-react-native';
import Loading from '@/components/Loading'
import InputComponent from '@/components/InputComponent'


const SignIn = () => {
  const {login} = useAuth()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)



  const handleLogin = async () => {
    if(!email || !password){
      Alert.alert('Sign In', 'Please fill in all fields')
      return
    }else{
      setLoading(true)
      const response = await login(email, password)
      setLoading(false)
      Alert.alert('Sign in', response.msg)
    }
  };
  return (
    <CustomKeyboardView>
          <Image source={images.onboarding} className='w-full h-[420px]' resizeMode='cover' />
          <View className='px-10 mt-5'>
              <Text className='text-center uppercase font-rubik text-black-200'>Welcome to real estate</Text>
              <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>Let Get You Closer To {"\n"} <Text className='text-primary-300'>Your Ideal Home</Text></Text>
             
              <View className='w-full flex flex-col gap-5 mt-5'>
      
                <InputComponent value={email} setValue={setEmail} placeholder='Enter your email...' />
                <InputComponent value={password} setValue={setPassword}  placeholder='Password' secureTextEntry={true}/>
            
              </View>
              {
                loading ? (
                  <View className='flex justify-center items-center mt-5'>
                    <Loading size={24}/>
                  </View>
                ) : (

                  <TouchableOpacity onPress={handleLogin} className='bg-primary-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                      <View className='flex flex-row items-center justify-center w-full'>
                        <Text className='text-lg font-rubik-medium text-white'>Sign In</Text>
                      </View>
                  </TouchableOpacity>
                )
              }
                <TouchableOpacity onPress={()=> router.push('/sign-up')} className='flex w-full items-center justify-center flex-row mt-5'>
                          <Text className='text-md font-rubik-base text-black-200'>Dont have an account? Sign up</Text>
                  </TouchableOpacity>
          </View>
      </CustomKeyboardView>
  )
}

export default SignIn
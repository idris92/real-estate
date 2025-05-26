import { View, Text, ScrollView, Image, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Redirect, router } from "expo-router";
import { useAuth } from './context/AuthContext'
import CustomKeyboardView from '@/components/CustomKeyboardView'
import LottieView from 'lottie-react-native';
import Loading from '@/components/Loading'


const SignIn = () => {
  const { session, signin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async () => {
    signin({email, password})
  };
  if (session) return <Redirect href="/" />;
  return (
    <CustomKeyboardView>
          <Image source={images.onboarding} className='w-full h-[420px]' resizeMode='cover' />
          <View className='px-10 mt-5'>
              <Text className='text-center uppercase font-rubik text-black-200'>Welcome to real estate</Text>
              <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>Let Get You Closer To {"\n"} <Text className='text-primary-300'>Your Ideal Home</Text></Text>
              {/* <Text className='text-center text-lg font-rubik text-black-200 mt-12'>Login to real estate with google</Text> */}
              <View className='w-full flex flex-col gap-5 mt-5'>
        
                  <Text className='font-medium font-rubik-medium text-base text-black-300'>Email:</Text>
                {/* <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding': 'height'}>  */}
                      <TextInput
                            placeholder="Enter your email..."
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            className='bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500'
                        />
                  
                    {/* </KeyboardAvoidingView> */}

                    <Text className='font-medium font-rubik-medium text-base text-black-300'>Password:</Text>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        className='bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500'
                    />
                   
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
          </View>
      </CustomKeyboardView>
  )
}

export default SignIn
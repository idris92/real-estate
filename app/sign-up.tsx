import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomKeyboardView from '@/components/CustomKeyboardView'
import images from '@/constants/images'
import { useAuth } from './context/oauthContext'
import Loading from '@/components/Loading'
import { router } from 'expo-router'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const  [loading, setLoading] = useState(false)

    const handleRegister=()=>{

    }
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

                    <Text className='font-medium font-rubik-medium text-base text-black-300'>Username:</Text>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        className='bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500'
                    />

                    <Text className='font-medium font-rubik-medium text-base text-black-300'>ProfileUrl:</Text>
                    <TextInput
                        placeholder="Profile image url"
                        value={profileUrl}
                        onChangeText={(text) => setProfileUrl(text)}
                        className='bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500'
                    />
                   
              </View>
              {
                loading ? (
                  <View className='flex justify-center items-center mt-5'>
                    <Loading size={24}/>
                  </View>
                ) : (

                  <TouchableOpacity onPress={handleRegister} className='bg-primary-300 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                      <View className='flex flex-row items-center justify-center w-full'>
                        <Text className='text-lg font-rubik-medium text-white'>Sign Up</Text>
                      </View>
                  </TouchableOpacity>
                )
              }
                <TouchableOpacity onPress={()=> router.push('/sign-in')} className='flex w-full items-center justify-center flex-row mt-5'>
                        <Text className='text-md font-rubik-base text-black-200'>Already have an account? Sign in</Text>
                </TouchableOpacity>
          </View>
      </CustomKeyboardView>
  )
}

export default SignUp
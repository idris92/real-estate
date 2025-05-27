import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomKeyboardView from '@/components/CustomKeyboardView'
import images from '@/constants/images'
import { useAuth } from './context/oauthContext'
import Loading from '@/components/Loading'
import { router } from 'expo-router'
import InputComponent from '@/components/InputComponent'

const SignUp = () => {
    const {register} = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const  [loading, setLoading] = useState(false)
    

    const handleRegister=async()=>{
        if (!email || !password || !username || !profileUrl){
            Alert.alert('Error', 'Please fill all missing fields')
            return
        }else{
            setLoading(true)
            let response = await register(email, password, username, profileUrl)

            if(!response.success){
                Alert.alert('Signup Error', response.msg)
                setLoading(false)
            }
        }
    }
  return (
    <CustomKeyboardView>
          <Image source={images.onboarding} className='w-full h-[420px]' resizeMode='cover' />
          <View className='px-10 mt-5'>
              <Text className='text-center uppercase font-rubik text-black-200'>Welcome to real estate</Text>
              <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>Let Get You Closer To {"\n"} <Text className='text-primary-300'>Your Ideal Home</Text></Text>
              <View className='w-full flex flex-col gap-5 mt-5'>

                <InputComponent value={email} setValue={setEmail} placeholder='Enter your email...' />
                <InputComponent value={password} setValue={setPassword}  placeholder='Password' secureTextEntry={true}/>
                <InputComponent value={username} setValue={setUsername} placeholder='Username' />
                <InputComponent value={profileUrl} setValue={setProfileUrl}  placeholder='Profile image url'/>
               
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
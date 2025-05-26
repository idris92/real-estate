import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { settings } from '@/constants/data';
import { router } from 'expo-router';
import { useAuth } from '@/app/context/AuthContext';


interface SettingsItemProps{
  icon: ImageSourcePropType;
  title: string;
  onPress?: ()=> void;
  textStyle?: string;
  showArrow?: boolean
}

const SettingsItem=({icon, title, onPress, textStyle, showArrow=true }:SettingsItemProps)=>(
  <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
        <View className='flex flex-row gap-3 items-center'>
            <Image source={icon} className='size-6'/>
            <Text className={`text-lg text-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>
        </View>
        {
          showArrow && <Image source={icons.rightArrow} className='size-5'/>
        }
  </TouchableOpacity>
)

const Profile = () => {
  const {signout, user} = useAuth()
  const handleLogout=()=>{
    signout()
  }
  return (
    <SafeAreaView className='h-full bg-white pt-5'>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
            <View className='flex flex-row items-center justify-between mt-5'>
                <Text className='text-xl font-rubik-bold'>Profile</Text>
                <Image source={icons.bell} className='size-5'/>
            </View>
            <View className='flex-row mt-5 flex justify-center'>
                <View className='flex flex-col mt-5 relative items-center'>
                    <Image source={images.avatar} className='size-44 relative rounded-full'/>
                    <TouchableOpacity className='absolute bottom-11 right-2'>
                        <Image source={icons.edit} className='size-9'/>
                    </TouchableOpacity>
                    <Text className='text-2xl mt-2 font-rubik-bold'> {user.name}</Text>
                </View>
            </View>
            <View className='flex flex-col mt-10 border-t pt-5 border-primary-200'>
                <SettingsItem icon={icons.calendar} title='My Booking'/>
                <SettingsItem icon={icons.wallet} title='Payments'/>
            </View>
            <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
              {
                settings.slice(2).map((item, index)=>(
                  <SettingsItem key={index} {...item}/>
                ))
              }
            </View>
            <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
              <SettingsItem icon={icons.logout} title='Logout' textStyle='text-danger' showArrow={false} onPress={handleLogout}/>
            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile
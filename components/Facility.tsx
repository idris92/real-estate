import { View, Text, Image } from 'react-native'
import React from 'react'


interface Props{
    title: string;
    icon:any;
    size?: 'sm'|'lg'
}
const Facility = ({title, icon, size='sm'}:Props) => {
  return (
    <View className={`flex items-center justify-center gap-3 ${size==='lg' ? 'flex-col': 'flex-row'}`}>
            <View className={`bg-primary-100 rounded-full items-center justify-center ${size === 'lg' ? 'p-5': 'p-3'}`}>
                <Image source={icon} className={`${size==='lg' ? 'size-5': 'size-4'}`}/>
            </View>
            <Text className={`text-xs  ${size==='lg' ? 'font-rubik': 'font-rubik-medium'}` }>{title}</Text>
    </View>
  )
}

export default Facility
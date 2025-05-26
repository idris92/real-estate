import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'


interface Props{
    image: any;
    name: string;
    comment: string;
    likes: number;
    time: string;
}

const Comment = ({image, name, comment, likes, time}:Props) => {
  return (
     <View className='flex flex-col items-start mt-10 gap-3'>
        <View className='flex flex-row gap-5 items-center'>
            <Image source={image} resizeMode='cover' className='size-14 rounded-full'/>
            <Text className='text-lg font-rubik-bold'>{name}</Text>
        </View>
        <Text className='text-base font-rubik text-black-100' numberOfLines={2}>{`${comment}`}</Text>
        <View className='w-full flex flex-row justify-between items-center'>
                <View className='flex items-center justify-start flex-row gap-1.5'>
                    <Image source={icons.heart} className='size-5' tintColor={'#0061FF'}/>
                    <Text className='text-lg font-rubik-medium'>{likes}</Text>
                </View>
                <Text className='text-base font-rubik text-black-100'>{time}</Text>
        </View>
    </View>
  )
}

export default Comment
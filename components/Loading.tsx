import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View className='flex w-full h-full items-center justify-center'>
       <ActivityIndicator size='large' color='#000'/>
    </View>
  )
}

export default Loading
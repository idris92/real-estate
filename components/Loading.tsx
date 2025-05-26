import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

interface props{
  size: number;
}

const Loading = ({size}:props) => {
  return (
    <View className={` flex justify-center items-center bg-red ${size}`}>
       {/* <LottieView source={require('../assets/images/loading.json')} autoPlay loop /> */}
       <ActivityIndicator size={size}/>
    </View>
  )
}

export default Loading
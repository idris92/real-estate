import { View, Text, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';


const CustomKeyboardView = ({children}:any) => {
  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100: 0}
    className='flex flex-1 bg-white '
    >
      <ScrollView
      // className='flex flex-1 pb-12 '
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-10'
      
      >
            {
                children
            }
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CustomKeyboardView
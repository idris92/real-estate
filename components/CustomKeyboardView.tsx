import { Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'


const CustomKeyboardView = ({children}:any) => {
  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === 'ios' ? 100: 0}
    className='flex flex-1 bg-white '
    >
      <ScrollView
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
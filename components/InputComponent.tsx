import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface props{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    placeholder: string;
    secureTextEntry?: boolean;
}

const InputComponent = ({value, setValue, secureTextEntry, placeholder}:props) => {
  return (
    <View className='w-full bg-neutral-100 rounded-lg border border-neutral-100 focus:border-primary-500 p-1.5'>
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => setValue(text)}
            secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

export default InputComponent
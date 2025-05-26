import Comment from '@/components/Comment'
import Facility from '@/components/Facility'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Property = () => {
    const {id} = useLocalSearchParams()
    const windowHeight = Dimensions.get('window').height;
  return (

    <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='w-full'>
      <View className='flex flex-col h-full relative bg-white w-full'>
        <View className='w-full' style={{height: windowHeight/2}}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <Image source={images.japan} className='w-full absolute' style={{height: windowHeight/2}} resizeMode='cover'/>
          <Image source={images.whiteGradient} className='size-full  absolute top-0' style={{height: windowHeight/2}} resizeMode='cover'/>
          
          <SafeAreaView className='w-full px-5'>
              <View className=' flex flex-row w-full mt-5 items-center justify-between'>
                  <TouchableOpacity onPress={()=> router.back()}>
                    <Image source={icons.backArrow} className='size-5'/>
                  </TouchableOpacity>
                  <View className='flex flex-row gap-5 items-center justify-center'>
                      <Image source={icons.heart} className='size-5' tintColor={'#191D31'}/>
                      <Image source={icons.send} className='size-5' tintColor={'#191D31'}/>
                  </View>
              </View>
          </SafeAreaView>
        </View>
            <View className='flex flex-col mt-5 w-full bg-white px-5'>
              <Text className='text-2xl font-rubik-extrabold'>Modernica Apartment</Text>
              <View className='flex flex-row items-center justify-start mt-5'>
                    <View className='flex items-center justify-center py-2 px-4 rounded-full bg-primary-100 '>
                          <Text className='text-xs font-rubik-medium text-primary-300 uppercase'>Apartment</Text>
                    </View>
                    <View className='flex flex-row gap-1.5 ml-3'>
                      <Image source={icons.star} className='size-4'/>
                      <Text className=' text-xs font-rubik-medium text-black-100'>4.8 (1,275 reviews)</Text>
                    </View>
              </View>
              <View className='flex flex-row items-center justify-between mt-5'>
                  <Facility title='8 Beds' icon={icons.bed}/>
                  <Facility title='3 Bath' icon={icons.bath}/>
                  <Facility title='2000 Sqft' icon={icons.area}/>
              </View>
              <View className=' flex flex-col mt-10 border-t pt-5 border-primary-200'>
                  <Text className='text-xl font-rubik-bold'>Agent</Text>
                  <View className='flex flex-row items-center justify-between mt-3'>
                    <View className='flex flex-row gap-5'>
                        <Image source={images.avatar} resizeMode='cover' className='size-14 rounded-full'/>
                        <View className='flex flex-col items-start gap-0.5 '>
                            <Text className='text-xl font-rubik-bold'>Natasya Wilodra</Text>
                            <Text className='text-base font-rubik text-black-100'>Owner</Text>
                        </View>
                    </View>
                      <View className='flex flex-row gap-5'>
                        <Image source={icons.chat} className='size-7' tintColor='#0061FF'/>
                        <Image source={icons.phone} className='size-7' tintColor='#0061FF'/>
                      </View>
                  </View>
              </View>
              <View className=' flex flex-col mt-5  pt-5 gap-5'>
                  <Text className='text-xl font-rubik-bold'>Overview</Text>
                  <Text className='text-base font-rubik text-black-100'>Sleek, modern 2-bedroom apartment with open living space, high-end finishes, and city views. Minutes from downtown, dining, and transit.</Text>
              </View>
              <View className='w-full flex flex-col mt-5 pt-5 gap-5'>
                  <Text className='text-xl font-rubik-bold'>Facilities</Text>
                  <View className=' flex flex-1 flex-col items-center justify-between gap-5'>
                      <View className='flex flex-row w-full items-center justify-between'>
                          <Facility title='Car Parking' icon={icons.carPark} size='lg'/>
                          <Facility title='Swimming' icon={icons.swim} size='lg'/>
                          <Facility title='Gym & Fitness' icon={icons.dumbell} size='lg'/>
                          <Facility title='Restaurant' icon={icons.cutlery} size='lg'/>
                      </View>
                      <View className='flex flex-row w-full items-center justify-between'>
                          <Facility title='Wifi & Net..' icon={icons.wifi} size='lg'/>
                          <Facility title='Pet Center' icon={icons.dog} size='lg'/>
                          <Facility title='Sport Center' icon={icons.run} size='lg'/>
                          <Facility title='Laundry' icon={icons.laundry} size='lg'/>
                      </View>
                  </View>
              </View>
              <View className='w-full flex flex-col mt-10 gap-5'>
                  <Text className='text-xl font-rubik-bold'>Gallery</Text>
                  <View className=' w-full flex flex-row justify-between items-center'>
                      <View className='flex items-start w-20 h-20 '>
                        <Image source={images.newYork} className='size-full rounded-lg' resizeMode='cover'/>
                      </View>
                      <View className=' flex items-start w-20 h-20'>
                        <Image source={images.newYork} className='size-full rounded-lg' resizeMode='cover'/>
                      </View>
                      <View className=' flex items-start w-20 h-20'>
                        <Image source={images.newYork} className='size-full rounded-lg' resizeMode='cover'/>
                      </View>
                      <View className=' flex items-start w-20 h-20'>
                        <Image source={images.newYork} className='size-full rounded-lg' resizeMode='cover'/>
                      </View>    
                  </View>
              </View>
              <View className=' w-full flex flex-col mt-5  pt-5 gap-5'>
                  <Text className='text-xl font-rubik-bold'>Location</Text>
                  <View className='w-full flex flex-row gap-3 items-start justify-start'>
                      <Image source={icons.location} className='size-5'/>
                      <Text className='font-rubik-medium text-black-100'>Grand City St. 100, New York, United States</Text>
                  </View>
                  <View className='relative w-full h-40'>
                      <Image source={images.map} className='size-full rounded-lg' resizeMode='cover'/>
                  </View>
              </View>
              <View className='w-full flex flex-row mt-10 items-center justify-between'>
                  <View className='flex flex-row gap-1.5 items-center justify-start'>
                    <Image source={icons.star} className='size-4'/>
                    <Text className=' text-base font-rubik-medium text-black-300'>4.8 (1,275 reviews)</Text>
                  </View>
                  <TouchableOpacity>
                      <Text className='text-base text-primary-300 font-rubik-bold'>See All</Text>
                  </TouchableOpacity>
              </View>
              <Comment image={images.avatar} name='Natasya Wilodra' comment={`The apartment is very clean and modern. I really like the interior design. Looks like I'll feel at home 😍`} likes={329} time='69days'/>

            </View>
            
        <View className='w-full h-40 bg-primary-100 rounded-t-2xl mt-10 flex flex-row items-center justify-between px-5'>
          <View className='flex flex-col gap-2'>
              <Text className='text-base text-black-100 font-rubik-medium uppercase'>Price</Text>
              <Text className='text-2xl text-primary-300 font-rubik-bold'>$17821</Text>
          </View>
          <TouchableOpacity  className='bg-primary-300 shadow-lg shadow-black-300 rounded-full  py-3 px-12'>
                  <Text className='text-lg font-rubik-medium text-white'>Booking Now</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default Property
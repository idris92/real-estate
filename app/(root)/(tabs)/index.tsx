import { useAuth } from "@/app/context/oauthContext";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResult from "@/components/NoResult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {user} = useAuth()
   const {id} = useLocalSearchParams()
    const handleDetails=()=>{
      router.push('/properties/1')
    }
  
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
      data={[1,2,3,4]} 
      renderItem={(item)=> <Card onPress={handleDetails}/>}
      keyExtractor={(item)=> item.toString()}
      numColumns={2}
      contentContainerClassName="pb-32 pt-5"
      columnWrapperClassName="flex gap-5 px-5"
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <NoResult/>
      }
      ListHeaderComponent={
        <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5 ">
                <View className="flex flex-row items-center">
                    <Image source={{uri: user?.profileUrl}} className="size-12 rounded-full" resizeMode="contain"/>
                    <View className="flex flex-col items-start ml-2 justify-center">
                        <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                        <Text className="text-base font-rubik-medium text-black-300">{user?.username}</Text>
                    </View>
                </View>
                <Image source={icons.bell} className="size-6"/>
            </View>
            <Search/>
            <View className="my-5">
                  <View className="flex flex-row items-center justify-between">
                      <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
                      <TouchableOpacity>
                          <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                      </TouchableOpacity>
                  </View>
                  <FlatList
                    data={[1,2,3,4]} 
                    renderItem={(item)=> <FeaturedCard onPress={handleDetails}/>}
                    keyExtractor={(item)=> item.toString()}
                    horizontal
                    bounces={false}
                    contentContainerClassName="flex gap-5 mt-5"
                    ListEmptyComponent={
                      <NoResult/>
                    }
                  />
             
            </View>
            <View className="flex flex-row items-center justify-between">
                      <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
                      <TouchableOpacity>
                          <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
                      </TouchableOpacity>
            </View>
            <Filters/>
       

        </View>
      }

      />
    </SafeAreaView>
  );
}

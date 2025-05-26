import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResult from "@/components/NoResult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Explore() {
  
  return (
    <SafeAreaView className="bg-white h-full pt-5">
      <FlatList 
      data={[1,2,3,4]} 
      renderItem={(item)=> <Card/>}
      keyExtractor={(item)=> item.toString()}
      numColumns={2}
      contentContainerClassName="pb-32"
      columnWrapperClassName="flex gap-5 px-5"
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        // loading ? (<ActivityIndicator className="text-primary-300 mt-5"/>) : (<NoResult/>)
        <NoResult/>
      }
      ListHeaderComponent={
        <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
                <TouchableOpacity onPress={()=> router.back()} className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center">
                    <Image source={icons.backArrow} className="size-5"/>
                </TouchableOpacity>
                <Text className="text-base mr-2 text-black-300 font-rubik-medium text-center">Search for Your Ideal Home</Text>
                <Image source={icons.bell} className="size-6"/>
            </View>
            <Search/>
            <View className="mt-5">
                <Filters/>
                <Text className="text-xl font-rubik-bold text-black-300 mt-5">Found 182 Apartments</Text>
            </View>
        </View>
      }

      />
    </SafeAreaView>
  );
}

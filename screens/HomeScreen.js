import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,SafeAreaView,TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import photo from '../screens/pic.png';
import { ChevronDownIcon ,UserIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {

    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className=" flex-row pb-4 text-center mx-0 px-4 space-x-2">
        <Image
          source={photo}
          className="h-10 w-10 bg-gray-300  rounded-full"
        />
        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Serach Bar */}
      <View className='flex-row items-center space-x-2 pb-2 mx-2'>
        <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 '>
          <MagnifyingGlassIcon color='gray' size={30} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;


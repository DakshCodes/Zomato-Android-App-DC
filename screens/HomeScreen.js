import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import photo from '../screens/pic.png';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';

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
      <View className=" flex-row pb-4  items-center mx-2  space-x-2">
        <Image
          source={photo}
          className="h-10 w-10 bg-gray-300  rounded-full"
        />
        <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color='black' />
          </Text>
        </View>
        <UserIcon size={37} color="black" />
      </View>
      {/* Serach Bar */}
      <View className='flex-row items-center space-x-2 pb-1 mx-2 '>
        <View className='flex-row flex-1 items-center space-x-2 h-12 bg-gray-200 '>
          <MagnifyingGlassIcon color='gray' size={25} />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color='black' size={30} />
      </View>

      {/* Body */}

      <ScrollView >
        {/* Categories */}
        <Categories  />

        {/* Features */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;


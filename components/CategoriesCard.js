import React from 'react'
import {View,Text, TouchableOpacity,Image} from "react-native";
import photo from '../screens/pic.png';
const CategoriesCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
      <Image 
      className='w-[93px] h-[93px] rounded'
      source={{
        uri:imgUrl,
      }}
      />
      <Text className="absolute left-1 bottom-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard

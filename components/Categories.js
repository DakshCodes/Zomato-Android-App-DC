import React from 'react'
import { View,Text, ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard';
import photo from '../screens/pic.png';

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:7,
        paddingTop:5,
    }}
    >
      {/* Categorie Card */}
      <CategoriesCard  imgUrl='https://tse3.mm.bing.net/th?id=OIP.62KlHCRa0eQnTAd3ne8m3wHaE7&pid=Api&P=0' title="Testing 1"  />
      <CategoriesCard  imgUrl='https://tse3.mm.bing.net/th?id=OIP.62KlHCRa0eQnTAd3ne8m3wHaE7&pid=Api&P=0' title="Testing 2" />
      <CategoriesCard imgUrl='https://tse3.mm.bing.net/th?id=OIP.62KlHCRa0eQnTAd3ne8m3wHaE7&pid=Api&P=0' title="Testing 3"  />
      <CategoriesCard imgUrl='https://tse3.mm.bing.net/th?id=OIP.62KlHCRa0eQnTAd3ne8m3wHaE7&pid=Api&P=0' title="Testing 3"  />
    </ScrollView>
  )

}

export default Categories;

import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import { SearchBar } from 'react-native-screens';

const search = () => {
  const [searchQuery,setSearchQuery]=useState('');
  
  const {
    data: movies,
    loading: moviesLoading,
    error:moviesError } = useFetch( () => fetchMovies ({
    query:searchQuery
  }),false)
  return (
    <View className="flex-1 bg-primary" >
      <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover"/>
      <FlatList
      data={movies} 
      renderItem={
        ({item}) =><MovieCard {...item}/>
      }
      keyExtractor={(item) => item.id.toString()}
      className="px-5"
      numColumns={3}
      columnWrapperStyle={{
        gap: 16,
        marginVertical: 10,
        justifyContent: "center",
      }}
      contentContainerStyle={{paddingBottom:20,
      }}
      ListHeaderComponent={
        <>
         <View className="w-full flex-row justify-center mt-20 item-center">
          <Image source ={icons.logo} className="w-12 h-10"></Image>

         </View>
         <View>
          <SearchBar placeholder="Search movies..."></SearchBar>
         </View>
         {moviesLoading && (
          <ActivityIndicator size="large" color="#000fff" className="my-3 "/>
         )}
         {moviesError && (
          <Text className="text-red-500 text-center px-5 my-3">Error: {moviesError?.message}</Text>
         )}
         {!moviesLoading &&!moviesError && searchQuery.trim() && movies?.length >0 && (
          <Text className="text-xl text-white font-bold">Search Results For {""}
          <Text className="text-accent">{searchQuery}</Text>
          </Text>

         )}"
        </>
      }
      />
     
    </View>
  )
}   

export default search

const styles = StyleSheet.create({})
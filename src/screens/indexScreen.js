import React, { useContext} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import BlogContext from "../context/blogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = ()=> {
    const {data, addBlogPost} =useContext(BlogContext)//child e erişim blog.contextProvider value!!! 
    return(
        <View>
            <Button title ="Add Post "  onPress={()=> addBlogPost()}   />
            <FlatList 
                data = {data}
                keyExtractor={(data)=> data.title}
                renderItem={({item})=>{
                    return <Text>{item.title}</Text>
                }}
            />
     
        </View>
        
    ) 

}

const styles = StyleSheet.create({})
export default IndexScreen;
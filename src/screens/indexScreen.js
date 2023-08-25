import React, { useContext} from "react";
<<<<<<< HEAD
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
     
=======
import {View, Text, StyleSheet} from 'react-native';
import BlogContext from "../context/blogContext";

const IndexScreen = ()=> {
    const value = useContext(BlogContext);
    return(
        <View>
            <Text>
                {value}
            </Text>
>>>>>>> bd1de226dd9600ca765f72e1cb46e1fd9c6f1eb5
        </View>
        
    ) 

}

const styles = StyleSheet.create({})
export default IndexScreen;
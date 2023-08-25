import React, { useContext} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from "../context/blogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = ()=> {
    const {state, addBlogPost} =useContext(Context) 
    return(
        <View>
            <Button title ="Add Post "  onPress={()=> addBlogPost()}   />
            <FlatList 
                data = {state}
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

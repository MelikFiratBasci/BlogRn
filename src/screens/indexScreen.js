import React, { useContext} from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Context} from "../context/blogContext";
import { FlatList } from "react-native-gesture-handler";
import {Feather} from '@expo/vector-icons'



const IndexScreen = ({navigation})=> {
    const {state, addBlogPost,deleteBlogPost} =useContext(Context) 
    return(
        <View >
            <FlatList 
                data = {state}
                keyExtractor={(data)=> data.title}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=> navigation.navigate('Show',{id: item.id})}>
                        <View style= {styles.row}>
                         <Text style={styles.title} >{item.title} = {item.id}</Text>

                         <TouchableOpacity onPress={()=>deleteBlogPost(item.id)} >
                         <Feather style={styles.iconStyle} name="trash" />
                         </TouchableOpacity>
                         </View>
                         </TouchableOpacity>
                         )  
                }}
            />

        </View>

    ) 

}
IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
};

const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 20,
        paddingHorizontal:10,
        borderTopWidth : 1,
        
        borderColor :'gray'
    },
    title :{
        fontSize :18
    },
    iconStyle :{
        fontSize : 24
    }

})
export default IndexScreen;

/*

 
  */
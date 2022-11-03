import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextArea, Select, Box, CheckIcon } from "native-base";
import React from "react";
import { VStack } from 'native-base';

export default function AddCategory({navigation}){

    return(
        <VStack space={7} alignItems="center" marginTop={79}>
            <Text style={styles.text} alignItems="start">Add Category</Text>
            <TextInput placeholder="Name" style={styles.input}/>
            <TouchableOpacity title="Login" style={styles.button}><Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>Add Category</Text></TouchableOpacity>
            <Text style={styles.text}>List Category</Text>
        </VStack>
        // <View style={styles.container}>
            
        // </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F7F3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#FF5555',
        width: 310,
        height: 40,
        marginHorizontal:15,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
    },
    text:{
        fontWeight:"bold",
        fontSize:30,
        width:200,
        alignSelf:"baseline",
        marginHorizontal:45

    },
    input:{
        backgroundColor:'#E9E9E9',
        borderWidth:1,
        borderRadius:5,
        width:310,
        height: 40,
        fontWeight:'100',
        padding:10,
        
    },
    inputt:{
        backgroundColor:'#E9E9E9',
        fontWeight:'100',
        marginBottom:10
        
    },
    inputctr:{
        backgroundColor:'#E9E9E9',
        borderWidth:1,
        borderRadius:5,
        width:310,
        height: 40,
        marginBottom:10
    }
  });
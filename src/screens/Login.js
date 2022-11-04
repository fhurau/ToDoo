import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import axios from "axios";
import React from "react";

export default function Login({navigation}){

    const [form, setForm] = React.useState({
        email:'',
        password:''
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            
            const body = JSON.stringify(form);
            setIsLoading(true)
            const response = await axios.post('https://api.kontenbase.com/query/api/v1/0b5806cc-db6b-4088-bbfc-f6368c72c166/auth/login', body, config);
            console.log(response);

            setIsLoading(false)
            if (response) {
                await AsyncStorage.setItem('token', response.data.token);
            }

            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                console.log(value);
                navigation.navigate("MyTab")
            }

        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            setIsLoading(false)
        }
    };


    return(
        <View style={styles.container}>
            <Image source={{uri:"https://res.cloudinary.com/dzayqrrm6/image/upload/v1667410255/Login_Icon_fq7d6g.png"}} style={{width :260, height:185}} />
            <Text style={styles.text}>Login</Text>
            <TextInput placeholder="Email" style={styles.input}  onChangeText={(value) => handleOnChange('email', value)} value={form.email}/>
            <TextInput placeholder="Password" style={styles.input} onChangeText={(value) => handleOnChange('password', value)} value={form.password}/>
            <TouchableOpacity title="Login" style={styles.button}onPress={handleOnPress}>
                {
                isLoading ?<Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>Loading...</Text>:<Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>Login</Text>
                }
            </TouchableOpacity>
            <Text>New Users ? <Text style={{fontWeight:'bold', color:'#FF5555'}} onPress={() => navigation.navigate("Register")}>Register</Text></Text>
        </View>
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
        marginHorizontal:20,
        marginTop:60,
        marginBottom:12,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:50,
        marginBottom:20,
        display:'flex',
        marginRight:245

    },
    input:{
        backgroundColor:'#E9E9E9',
        borderWidth:1,
        borderRadius:5,
        width:310,
        height: 40,
        fontWeight:'100',
        padding:10,
        marginBottom:10
        
    }
  });
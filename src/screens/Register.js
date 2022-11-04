import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import axios from "axios";
import React from "react";

export default function Register({navigation}){
    const [form, setForm] = React.useState({
        firstName:'',
        email:'',
        password:''
    });

    const handleOnChange =(name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const body = JSON.stringify(form);

            const response = await axios.post('https://api.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/auth/register', body,config)
            console.log(response);

            if (response){
                await AsyncStorage.setItem('token', response.data.token);
            }

            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                console.log(value);
                navigation.navigate("Login")
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return(
        <View style={styles.container}>
            <Image source={{uri:"https://res.cloudinary.com/dzayqrrm6/image/upload/v1667410255/Login_Icon_fq7d6g.png"}} style={{width :260, height:185}} />
            <Text style={styles.text}>Login</Text>
            <TextInput placeholder="Name" style={styles.input} onChangeText={(value) => handleOnChange('firstName', value)} value={form.firstName}/>
            <TextInput placeholder="Email" style={styles.input} onChangeText={(value) => handleOnChange('email', value)} value={form.email}/>
            <TextInput placeholder="Password" style={styles.input} onChangeText={(value) => handleOnChange('password', value)} value={form.password}/>
            <TouchableOpacity title="Login" style={styles.button} onPress={handleOnPress}><Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>Register</Text></TouchableOpacity>
            <Text>Joined us before? <Text style={{fontWeight:'bold', color:'#FF5555'}} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
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
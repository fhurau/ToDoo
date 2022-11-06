import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextArea, Select, Box, CheckIcon, HStack } from "native-base";
import React from "react";
import { VStack } from 'native-base';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native";
import { LogBox } from "react-native";
LogBox.ignoreLogs(['Warning: ...', 'VirtualizedList: ...']);

export default function AddCategory({ navigation }) {

    const [category, setCategory] = React.useState([]);
    const GetCategory = async () => {
        try {
            const token = await AsyncStorage.getItem("token")

            const response = await axios.get("https://api.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/Category?$lookup=*", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCategory(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => { GetCategory() }, [])


    const [isLoading, setIsLoading] = React.useState(false);
    const [form, setForm] = React.useState({
        name: '',
    });


    const handleOnChange = (name, value) => {
        setForm({
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            };

            const body = JSON.stringify(form);
            setIsLoading(true)
            await axios.post('https://api.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/Category', body, config);
            const response = await axios.get("https://api.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/Category?$lookup=*", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setCategory(response.data)

            setIsLoading(false)
            alert("Success Adding Category")


        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
            setIsLoading(false)
        }
    };


    return (
        <VStack space={7} alignItems="center" marginTop={79}>
            <Text style={styles.text} alignItems="start">Add Category</Text>
            <TextInput placeholder="Name" style={styles.input} onChangeText={(value) => handleOnChange('name', value)} value={form.name} />
            <TouchableOpacity title="Login" style={styles.button} onPress={handleOnPress}><Text style={{ fontSize: 20, fontWeight: 'bold', color: "#FFFFFF" }}>Add Category</Text></TouchableOpacity>
            <Text style={styles.text}>List Category</Text>

            <FlatList
                numColumns={3}
                data={category}
                renderItem={({ item, index }) =>
                    <View style={styles.buttons}>
                        <Text key={index}>{item.name}</Text>
                    </View>
                }
                keyExtractor={(item, index) => index}
            />
        </VStack>
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
        marginHorizontal: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
    },
    buttons: {
        backgroundColor: '#FF5555',
        width: 75,
        height: 30,
        margin: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
        width: 200,
        alignSelf: "baseline",
        marginHorizontal: 45

    },
    input: {
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 5,
        width: 310,
        height: 40,
        fontWeight: '100',
        padding: 10,

    },
    inputt: {
        backgroundColor: '#E9E9E9',
        fontWeight: '100',
        marginBottom: 10

    },
    inputctr: {
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 5,
        width: 310,
        height: 40,
        marginBottom: 10
    }
});
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextArea, Select, Box, CheckIcon } from "native-base";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { Axios } from "axios";

export default function AddList({ navigation }) {
    const [data, setData] = React.useState([]);
    const [form, setForm] = React.useState({
        title: '',
        desc: '',
        date: '',
        category:'',
    });
    console.log(form);

    const getData = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token === null) {
                navigation.navigate("Login");
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };


            const res = await axios.get("https://api.v2.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/Category?$lookup=*", config);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getData();
    }, []);


    const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnPress = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("Login")
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };

            // const body = JSON.stringify(form);
            const response = await axios.post('https://api.v2.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/ToDO', form, config);

            alert('List Added Successfully')
            navigation.navigate("ToDo")

        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }

    const [service, setService] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add List</Text>
            <TextInput placeholder="Name" style={styles.input} onChangeText={(value) => handleOnChange('title', value)} value={form.title} />
            <Select minWidth="310" margin={1} backgroundColor="#E9E9E9" borderColor={"black"} fontWeight="bold" color={"black"} accessibilityLabel="Category" placeholder="Category" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={value => handleOnChange("category", value)}>
                
                {data.map((item) => {
                    return <Select.Item label={item.name} value={item.name} key={item._id} />;
                })}
            </Select>
            <TextInput placeholder="Date" style={styles.input} onChangeText={(value) => handleOnChange('date', value)} value={form.date} />
            <TextArea h={20} placeholder="Description" w="75%" maxW="310" margin={1} backgroundColor="#E9E9E9" borderColor={"black"} fontWeight="bold" color={"black"} minWidth="310" onChangeText={(value) => handleOnChange('desc', value)} value={form.desc} />
            <TouchableOpacity title="Add" style={styles.button} onPress={handleOnPress}><Text style={{ fontSize: 20, fontWeight: 'bold', color: "#FFFFFF" }}>Add List</Text></TouchableOpacity>
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
        marginHorizontal: 20,
        marginTop: 60,
        marginBottom: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 50,
        marginBottom: 20,
        display: 'flex',
        marginRight: 245

    },
    input: {
        backgroundColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 5,
        width: 310,
        height: 40,
        fontWeight: '100',
        padding: 10,
        marginBottom: 10

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
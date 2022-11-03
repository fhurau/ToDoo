import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TextArea, Select, Box, CheckIcon } from "native-base";
import React from "react";

export default function AddList({navigation}){
    const [service, setService] = React.useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add List</Text>
            <TextInput placeholder="Name" style={styles.input}/>
                <Select selectedValue={service} minWidth="310" margin={1} backgroundColor="#E9E9E9" borderColor={"black"} fontWeight="bold" color={"black"} accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
                </Select>
                <TextInput placeholder="Name" style={styles.input}/>
            <TextArea h={20} placeholder="Text Area Placeholder" w="75%" maxW="310" margin={1} backgroundColor="#E9E9E9" borderColor={"black"} fontWeight="bold" color={"black"} minWidth="310" />
            <TouchableOpacity title="Login" style={styles.button}><Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}}>Add List</Text></TouchableOpacity>
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
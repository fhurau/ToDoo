import { StyleSheet, View , Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Home ({navigation}){

    return(
        <View style={styles.container} >
            <Image source={{uri:"https://res.cloudinary.com/dzayqrrm6/image/upload/v1667401636/accept-request_1_rpsyod.png"}} style={{width :200, height:200}} />
            <Image source={{uri:"https://res.cloudinary.com/dzayqrrm6/image/upload/v1667403015/Ways_ToDO_dizq8s.png"}} style={{width :210, height:38}} />
            <Text style={styles.text}>Write your activity and finish your activity.
            Fast, Simple and Easy to Use</Text>
            <TouchableOpacity title="Login" style={styles.buttonatas}><Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} onPress={() => navigation.navigate("Login")}>Login</Text></TouchableOpacity>
            <TouchableOpacity title="Login" style={styles.buttonbawah}><Text style={{fontSize:20, fontWeight:'bold', color:"#FFFFFF"}} onPress={() => navigation.navigate("Register")}>Register</Text></TouchableOpacity>
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
    buttonatas: {
        backgroundColor: '#FF5555',
        width: 310,
        height: 40,
        marginHorizontal:20,
        marginTop:100,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
    },
    buttonbawah: {
        backgroundColor: 'grey',
        width: 310,
        height: 40,
        marginHorizontal:20,
        marginTop:20,
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:10,
    },
    text:{
        fontWeight:'bold',
        fontSize:12,
        textAlign:'center',
        marginHorizontal:50,
        marginTop:20
    }
  });
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import AddList from "./src/screens/AddList";
import AddCategory from "./src/screens/AddCategory";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return(
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown:false,
      tabBarLabel:() => {return null},
      tabBarIcon: ({focused}) => {
        let iconName;
        if (route.name == "AddList"){
          iconName = focused ? "list" : "list-outline"
          return<Ionicons name={iconName} size={20} color="red"/>
        }else if (route.name =="AddCategory"){
          iconName = focused ? "document-text" : "document-text-outline"
          return<Ionicons name={iconName} size={20} color="red"/>
        }
        
      }
    })}>
      <Stack.Screen name="AddList" component={AddList}/>
      <Stack.Screen name="AddCategory" component={AddCategory}/>
    </Tab.Navigator>
  )
}

export default function Container() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false, headerTintColor:"white", headerMode:"screen"}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
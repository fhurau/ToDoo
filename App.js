import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Container from './Container';
import AddList from './src/screens/AddList';
import {NativeBaseProvider} from "native-base"
import ToDo from './src/screens/ToDo';





export default function App() {
  return (
    <NativeBaseProvider>
      <Container/>
    </NativeBaseProvider>
  );
}
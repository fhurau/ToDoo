import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import {
    Box, CheckIcon, HStack, Icon, Image, Input, Select, Text, View, VStack
} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const check = "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png"
const date ="https://res.cloudinary.com/dzayqrrm6/image/upload/v1667755170/Vector_qyrzjq.png"



export default ToDo = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [list, setList] = React.useState([]);
    const getData = async () => {
        try {
            const token = await AsyncStorage.getItem('token');

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }

            const res = await axios.get('https://api.v2.kontenbase.com/query/api/v1/0283f447-fd6d-4c5c-8a7a-d21298c9406f/ToDO?$lookup=*', config);
            setList(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        if (isFocused) {
            getData();
        }
    }, [isFocused]);

    return (
        <View w="full" mt="10" padding="5">
            <HStack style={{ justifyContent: "space-between" }}>
                <Box>
                    <Text bold fontSize="xl" w="64">
                        Hi Fhurau
                    </Text>
                    <Text color="red.400">20 List</Text>
                </Box>

                <Image source={{
                    uri: "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667488842/Pngtree_character_default_avatar_5407167_q5ospz.png"
                }} alt="Alternate Text" style={{ width: 50, height: 50, borderRadius: 10 }} resizeMode="contain" />
            </HStack>

            <Input
                placeholder="Search"
                variant="filled"
                width="100%"
                mt={8}
                py="1"
                px="1"
                InputLeftElement={
                    <Icon ml="2" size="4" color="gray.400" name="ios-search" />
                }
            />

            <HStack space={2}>
                <Select
                    minWidth="100"
                    size="xs"
                    accessibilityLabel="Choose Service"
                    placeholder="Category"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1"
                >
                    <Select.Item label="UX Research" value="ux" />
                    <Select.Item label="Web Development" value="web" />
                    <Select.Item label="Cross Platform Development" value="cross" />
                    <Select.Item label="UI Designing" value="ui" />
                    <Select.Item label="Backend Development" value="backend" />
                </Select>

                <Select
                    minWidth="100"
                    size="xs"
                    accessibilityLabel="Choose Service"
                    placeholder="Status"
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1"
                >
                    <Select.Item label="Holding" value="holding" />
                    <Select.Item label="Started" value="started" />
                    <Select.Item label="finished" value="finished" />
                </Select>
            </HStack>
            <SafeAreaView>
                {list &&
                    <FlatList
                        data={list}
                        key={item => item.index}
                        renderItem={({ item }) => (
                            <Pressable onPress={() => navigation.navigate("Detail", { item })} style={styles.container}>
                                <HStack>
                                    <VStack style={styles.bg}>
                                        <Text style={styles.hv}>{item.title}</Text>
                                        <Text style={styles.hv}>{item.desc}</Text>
                                        <Text style={styles.hv}><Image source={{ uri: date }} style={{ width: 17, height: 17, alignSelf:'center'}} alt="alt" />{item.date}</Text>
                                    </VStack>
                                    <VStack>
                                        <Box backgroundColor="blue.300" borderRadius={5} margin="2">
                                            <Text
                                                fontSize="15px"
                                                bold
                                                color="white"
                                                w={12}
                                                textAlign="center"
                                            >
                                                {item?.category}
                                            </Text>
                                        </Box>
                                        <TouchableOpacity style={{margin:2}}>
                                            <Image source={{ uri: check }} style={{ width: 30, height: 30, alignSelf:'center'}} alt="alt" />
                                        </TouchableOpacity>
                                    </VStack>
                                </HStack>
                            </Pressable>
                        )}
                        keyExtractor={(item, index) => index}
                    />
                }
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DAEFFF',
        margin: 5,
        borderRadius: 10,
        height:100
    },
    bg: {
        padding:15,
        width: 300
    },
    hv:{
        marginVertical:1
    }
})
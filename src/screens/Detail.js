// import { StatusBar, Text, View } from "native-base"
// import React from "react"

// export default function Detail({route}){
//     const item = route.params.item
//     console.log(item);
//     return(
//         <View style={{flex: 1,
//             backgroundColor: '#F8F7F3',
//             alignItems: 'center',
//             justifyContent: 'center',}}>
//             <View style={{backgroundColor:'#1B98E04D',padding:5,borderRadius:10}}>
//             <Text>{item?.category[0]?.name}</Text>
//             <Text>{item?.title}</Text>
//             <Text>{item?.desc}</Text>
//             </View>
//         </View>
//     )
// }

import React from "react";
import {
    ScrollView,
    Box,
    VStack,
    Divider,
    Text,
    HStack,
    Image,
} from "native-base";
const check = "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png"


export default function Detail({ route }) {
    const item = route.params.item;
    return (
        <ScrollView padding={5}>
            <Box backgroundColor="#DAEFFF" borderRadius="5" mt={10} mb={10}>
                <VStack space="4" divider={<Divider />}>
                    <HStack px="4" pt="4">
                        <Text fontSize="30px" w="64">
                            {item.title}
                        </Text>
                        <Box>
                            <Box backgroundColor="red.300" borderRadius={5} marginRight="5">
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
                            <Image
                                mt={2}
                                source={{ uri: check }}
                                resizeMode="contain"
                                alignItems="center"
                                style={{ width: 30, height: 30 }} alt="check"
                            />
                        </Box>
                    </HStack>
                    <Box px="4">
                        {item?.desc}
                    </Box>
                    <Box px="4" pb="4">
                        {item.date}
                    </Box>
                </VStack>
            </Box>
        </ScrollView>
    );
};

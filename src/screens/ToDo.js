import React from "react";
import {
    ScrollView,
    Text,
    HStack,
    Box,
    Input,
    Icon,
    Select,
    CheckIcon,
    VStack,
    Image
} from "native-base";
const check = "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png"

const List = [
    {
        id: 1,
        category: "Study",
        name: "golang",
        date: "3 desember 2022",
        status: check,
    },
    {
        id: 2,
        category: "Home work",
        name: "mathematic",
        date: "4 desember 2022",
        status: check,
    },
    {
        id: 3,
        category: "Study",
        name: "HTML",
        date: "3 desember 2022",
        status: check,
    },
    {
        id: 4,
        category: "Study",
        name: "Javascript",
        date: "9 desember 2022",
        status: check,
    },
    {
        id: 5,
        category: "home work",
        name: "Javascript",
        date: "9 desember 2022",
        status: check,
    },
    {
        id: 6,
        category: "home work",
        name: "Javascript",
        date: "9 desember 2022",
        status: check,
    },
];

export default ToDo = () => {
    return (
        <ScrollView w="full" mt="10" padding="5">
            <HStack style={{justifyContent:"space-between"}}>
                <Box>
                    <Text bold fontSize="xl" w="64">
                        Hi Fhurau
                    </Text>
                    <Text color="red.400">20 List</Text>
                </Box>
                
                <Image source={{
                    uri: "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667488842/Pngtree_character_default_avatar_5407167_q5ospz.png"
                }} alt="Alternate Text" style={{width:50, height:50, borderRadius:10}} resizeMode="contain" />
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
            <ScrollView>
            <Box mt={12}>
                <VStack>
                    {List.map((item) => {
                        return (
                            <HStack
                                mb={6}
                                backgroundColor="blue.100"
                                borderRadius={5}
                                padding="3"
                                key={item.id}
                                justifyContent={"space-between"}
                            >
                                <Box>
                                    <Text bold fontSize="xs" w="64">
                                        {item.category} - {item.name}
                                    </Text>
                                    <Text fontSize="2xs" w="64">
                                        Learn Golang to improve fundamentals and familiarize with
                                        coding.
                                    </Text>
                                    <Text fontSize="2xs" w="64" mt={3}>
                                        {item.date}
                                    </Text>
                                </Box>
                                <Box >
                                    <Box
                                        backgroundColor="red.300"
                                        borderRadius={5}
                                        marginRight="5"
                                        alignItems={"flex-end"}
                                    >
                                        <Text
                                            fontSize="10px"
                                            color="black"
                                            w={12}
                                            textAlign="center"
                                        >
                                            {item.category}
                                        </Text>
                                    </Box >
                                    <Image
                                        mt={2}
                                        source={{ uri: "https://res.cloudinary.com/dzayqrrm6/image/upload/v1667482736/icon__Check_Circle__zk0lh7.png" }}
                                        resizeMode="contain"
                                        alignItems="center"
                                        alt={check}
                                        style={{ width: 40, height: 40, }}
                                    />
                                </Box>
                            </HStack>
                        );
                    })}
                </VStack>
            </Box>
            </ScrollView>
        </ScrollView>
    );
};
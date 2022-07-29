import React from 'react';
import {
    Button,
    Modal,
    Text, Flex, Box, Center,VStack, StackDivider,
} from '@chakra-ui/react';
import Books from "./Books";
import Connection from "./Connection";
import Man from "./Man";

const Production = () => {

    return (
        <VStack
            mt={'5vh'}
            mb={'5vh'}
            pt={'50px'}
            pb={'50px'}
            divider={<StackDivider/>}
            spacing={3}
            align='stretch'
            alignItems='center'
            z-index={5}
            bg={'#c4dfe6'}
        >
            <Books/>
            <Connection/>
            <Man/>
        </VStack>
    )
}
export default Production
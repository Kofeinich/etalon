import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './drawer';
import {  IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import React from "react";

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Flex
            display={{ base: "flex", md: "none" }}
        >
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left">
                    <Link to='/'>Главная</Link>
                    <Link to='/arbitrazhnaya-praktika'>Арбитраж</Link>
                    <Link to='/'>Семейные споры</Link>
                    <Link to='/'>Наследственные споры</Link>
                    <Link to='/'>Недвижимость</Link>
                    <Link to='/'>Судебные споры</Link>
                    <Link to='/'>Взыскание долгов</Link>
                </VStack>
            </Drawer>
        </Flex>
    );
};
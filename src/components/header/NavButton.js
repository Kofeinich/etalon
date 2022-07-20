import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './DrawerWrapper';
import {  IoMdMenu } from 'react-icons/io';
import React from "react";
import DrawerWrapper from "./DrawerWrapper";

export default function NavButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Flex as={'nav'}>
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>
            <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
                <DrawerWrapper/>
            </Drawer>
        </Flex>
    );
};
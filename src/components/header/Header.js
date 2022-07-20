import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import { Link } from "gatsby"
import React from "react";
import NavButton from "./NavButton";
import HeaderBlockButton from "./HeaderBlockButton";

export default function Header() {
    return (
        <Flex
            w="100vw"
            position={'sticky'}
            h={'80px'}
            bg={'white'}
            px="6"
            py="6"
            z-index='5000'
            align="center"
            text-decoration='none'
            justify="space-between"
            borderBottom={'2px solid #ffb300'}
        >
            <HeaderBlockButton/>
            <NavButton />
        </Flex>
    );
}

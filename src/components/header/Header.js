import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import Logo from '../../templates/svg/Logo';
import { Link } from "gatsby"
import React from "react";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                position={'sticky'}
                px="6"
                py="5"
                align="center"
                justify="space-between"
                borderBottom={'2px solid #ffb300'}
            >
                <Logo/>
                <HStack as="nav" spacing="5">
                    <Link to='/'>
                        <Button variant='text' >Главная</Button>
                    </Link>
                    <Link to='/arbitrazhnaya-praktika'>
                        <Button variant='text' >Арбитраж</Button>
                    </Link>
                    <Link to='/semeynyye-spory'>
                        <Button variant='text' >Семейные споры</Button>
                    </Link>
                    <Link to='/nasledstvennyye-spory'>
                        <Button variant='text' >Наследственные споры</Button>
                    </Link>
                    <Link to='/sdelki-s-nedvizhimostyu'>
                        <Button variant='text' >Недвижимость</Button>
                    </Link>
                    <Link to='/sudebnyye-spory'>
                        <Button variant='text' >Судебные споры</Button>
                    </Link>
                    <Link to='/vzyskaniye-dolgov'>
                        <Button variant='text' >Взыскание долгов</Button>
                    </Link>
                </HStack>
                <HStack
                >
                </HStack>
                <MobileDrawer/>
            </Flex>
        </chakra.header>
    );
}

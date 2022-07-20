import React from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Flex, Text, VStack, Button,
} from "@chakra-ui/react";
import { Link } from "gatsby"

export default function DrawerWrapper({
                                          placement = "right",
                                          width,
                                          isOpen,
                                          children,
                                          onClose,
                                          btnRef,
                                          title = "Меню",
                                          footer,
                                      }) {
    return (
        <Flex w={width}>
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent alignItems="center">
                    <DrawerCloseButton alignSelf="end" mx={15} my={15} />
                    <DrawerHeader my={15}>
                        <Text as="p">{title}</Text>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems="left" spacing={4}>
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
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>{footer}</DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
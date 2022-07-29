import React from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent,
    DrawerCloseButton, Flex, Text, VStack, Button, Box,
} from "@chakra-ui/react";
import { Link } from "gatsby"
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

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
                <DrawerContent
                    alignItems="center"
                    bg={'#c4dfe6'}
                    fontFamily={'CasperRegular'}
                    color={'#2d334a'}
                >
                    <DrawerCloseButton alignSelf="end" mx={15} my={3} />
                    <DrawerHeader
                        w={'100%'}
                        bg={'#c4dfe6'}
                    >
                        <Flex
                            jusify={'center'}
                            w={'100%'}
                        >
                            <Flex
                                justify={'space-between'}
                            >
                                <Box
                                    fontSize={'40px'}
                                    mr={'14px'}
                                    color={'#272343'}
                                    _hover={{
                                        color: '#ffb300'
                                    }}
                                >
                                    <PermPhoneMsgIcon fontSize={'large'}/>
                                </Box>
                                <Box>
                                    <a style={{color: '#272343', outline: 'none', cursor: 'pointer', _hover: '#ffb300',}} href="tel:+79180675105">
                                        +7 (918) 067-51-05
                                    </a>
                                    <Box
                                        color={'#ffb300'}
                                        mr={'20px'}
                                        ml={'10px'}
                                    >
                                        <Text mb={'0px'} mt={'0px'} align={'left'} fontSize={'12px'} > Компетентно</Text>
                                        <Text mt={'0px'} align={'left'} fontSize={'12px'} > Удобно</Text>
                                        <Text mb={'0px'} align={'left'} fontSize={'12px'} > Просто</Text>
                                    </Box>
                                </Box>
                            </Flex>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody
                        w={'100%'}
                        bg={'white'}
                    >
                        <VStack alignItems="left" spacing={2.5}>
                            <Link to='/'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Главная
                                </Button>
                            </Link>
                            <Link to='/arbitrazhnaya-praktika'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Арбитраж
                                </Button>
                            </Link>
                            <Link to='/semeynyye-spory'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Семейные споры
                                </Button>
                            </Link>
                            <Link to='/vzyskaniye-dolgov'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Взыскание долгов
                                </Button>
                            </Link>
                            <Link to='/nasledstvennyye-spory'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Наследственные споры
                                </Button>
                            </Link>
                            <Link to='/sdelki-s-nedvizhimostyu'>
                                <Button
                                    fontSize={'20px'}
                                    variant='text'
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Недвижимость
                                </Button>
                            </Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter
                        bg={'#c4dfe6'}
                        display={'column'}
                    >
                        <Flex
                            w={'100%'}
                            justify={'center'}
                        >
                            <Text>
                                Контакты
                            </Text>
                        </Flex>
                        <Flex
                            w={'100%'}
                            justify={'center'}
                        >
                            <Flex
                                justify={'space-between'}
                            >
                                <a href="tel:+79180675105">
                                    <Box
                                        fontSize={'40px'}
                                        mr={'14px'}
                                        color={'#272343'}
                                        _hover={{
                                            color: '#ffb300'
                                        }}
                                    >
                                        <PhoneInTalkIcon fontSize={'large'} />
                                    </Box>
                                </a>
                                <Box
                                    fontSize={'40px'}
                                    mr={'8px'}
                                    color={'#272343'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <a href="https://skobelkin.ru/whatsapp/79180675105?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82,+%D1%8F+%D1%81+%D1%81%D0%B0%D0%B9%D1%82%D0%B0">
                                        <WhatsAppIcon fontSize={'large'} />
                                    </a>
                                </Box>
                                <Box
                                    fontSize={'40px'}
                                    color={'#272343'}
                                    _hover={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <a href="https://tlgg.ru/konyukhov_vladimir">
                                        <TelegramIcon fontSize={'large'} />
                                    </a>
                                </Box>
                            </Flex>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
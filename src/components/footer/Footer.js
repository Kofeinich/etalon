import {
    Text, Flex, Box, Center,Grid,chakra,
} from '@chakra-ui/react';
import React from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <chakra.footer id="footer">
            <Flex
                borderTop={'2px solid #ffb300'}
                w={'100vw'}
                bg={'#c4dfe6'}
                color={'#2d334a'}
            >
                <Flex
                    w={'100%'}
                    justify={'center'}
                >
                    <Flex
                        w={'100%'}
                        maxWidth={'1000px'}
                        justify={'space-between'}
                    >
                        <Flex
                            pt={'20px'}
                            pb={'20px'}
                            ml={'5vw'}
                            fontSize='xs'
                            display={'column'}
                            fontFamily={'CasperRegular'}
                        >
                            <Text
                                as='i'
                                color={'#272343'}
                                fontFamily={"CasperBoldItalic"}
                            >
                                © 2019-2022 Все права защищены
                            </Text>
                            <br/>
                            <Text
                                mt={'10px'}
                                mb={'0px'}
                            >
                                Краснодарский край, город Новороссийск,
                            </Text>
                            <Text
                                mt={'5px'}
                                mb={'0px'}
                            >
                                улица Котанова,  дом 6
                            </Text>
                        </Flex>
                        <Flex
                            justify={'right'}
                            mr={'5vw'}
                            mt={'30px'}
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
                </Flex>
            </Flex>
        </chakra.footer>
    )
}

export default Footer
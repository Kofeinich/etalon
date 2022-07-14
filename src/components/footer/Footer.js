import {
    Text, Flex, Box, Center,Grid,chakra,
} from '@chakra-ui/react';
import React from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <chakra.footer id="footer">
            <Flex
                borderTop={'2px solid #ffb300'}
                w={'100vw'}
                bg={'#07575b'}
            >
                <Flex
                    w={'100%'}
                    justify={'center'}
                >
                    <Flex
                        w={'100%'}
                        fontFamily={"CasperItalic"}
                        color={'white'}
                        maxWidth={'1000px'}
                        justify={'space-between'}
                    >
                        <Flex
                            pt={'20px'}
                            pb={'20px'}
                            ml={'5vw'}
                            fontSize='xs'
                            display={'column'}
                            fontFamily={'CasperBoldItalic'}
                        >
                            <Text
                                as='i'
                                color={'#ffb300'}
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
                                    color={'#c4dfe6'}
                                    _hover={{
                                        color: '#ffb300'
                                    }}
                                >
                                    <PhoneInTalkIcon fontSize={'large'} />
                                </Box>
                            </a>
                            <Box
                                fontSize={'40px'}
                                color={'#c4dfe6'}
                                _hover={{
                                    color: '#ffb300',
                                    cursor: 'pointer',
                                }}
                            >
                                <WhatsAppIcon fontSize={'large'} />
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </chakra.footer>
    )
}

export default Footer
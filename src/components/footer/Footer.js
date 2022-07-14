import {
    Text, Flex, Box, Center,Grid,
} from '@chakra-ui/react';
import React from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <Flex
            w={'100vw'}
            bg={'#07575b'}
        >
            <Flex
                w={'100%'}
            >
                <Flex
                    p={'20px'}
                    color={'white'}
                    ml={'5vw'}
                >
                    <Text
                        as='i' w={'100%'}
                        fontSize={'14px'}
                    >
                        © 2019-2022 Все права защищены
                    </Text>
                    <Box w={'160px'} h={'5px'} mt={'15px'} borderTop={'2px solid #ffb300'}/>
                    <Text fontFamily={'Verdana'} color={'white'} mt={'5px'} mb={'0px'} fontSize={'14px'}>
                        Краснодарский край
                    </Text>
                    <Text fontFamily={'Verdana'} color={'white'} mt={'5px'} mb={'0px'} fontSize={'14px'}> г. Новороссийск</Text>
                    <Text fontFamily={'Verdana'} color={'white'} mt={'5px'} mb={'0px'} fontSize={'14px'}> ул. Котанова</Text>
                    <Text fontFamily={'Verdana'} color={'white'} mt={'5px'} mb={'0px'} fontSize={'14px'}> дом. 6</Text>
                </Flex>
                <Flex
                    justify={'right'}
                    mr={'5vw'}
                    mt={'30px'}
                >
                    <a href="tel:+79180675105">
                        <Box mr={'14px'} color={'#c4dfe6'}
                             _hover={{
                                 color: '#ffb300'
                             }}
                        >
                            <PhoneInTalkIcon fontSize={'large'} />
                        </Box>
                    </a>
                    <Box color={'#c4dfe6'}
                         _hover={{
                             color: '#ffb300'
                         }}
                    >
                        <WhatsAppIcon fontSize={'large'} />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer
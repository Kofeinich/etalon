import React from 'react';
import {
    Button,
    Divider,
    Icon,
    Text, Flex, Box, Input, Grid, Center,
} from '@chakra-ui/react';
import SVGMan from "../../templates/svg/home-page/SVGMan";
import SVGBooks from "../../templates/svg/home-page/SVGBooks";


const Man = () => {
    let fsH='34px'
    let fs = '18px'
    if (window.innerWidth < 520){
        fsH='22px'
        fs='16px'
    }

    let picture =
        <Flex
            w={'100vw'}
            justify={'center'}
            color={'#2d334a'}
        >
            <Flex
                justify={'center'}
                fontFamily={'CasperRegular'}
                bg={'white'}
                borderRadius={'20px'}
            >
                <Box
                    maxWidth={'500px'}
                    align={'right'}
                    m={'0 30px'}
                >
                    <SVGMan width={'100%'} height={'100%'}/>
                </Box>
                <Box
                    align={'left'}
                    maxWidth={'500px'}
                >
                    <Center >
                        <Text
                            fontSize={fsH}
                            color={'#272343'}
                            align={'center'}
                            mb={'0px'}
                            fontFamily={'CasperBoldItalic'}
                        >
                            Что мне делать сейчас?
                        </Text>
                    </Center>
                    <Text align={'justify'} fontSize={fs} p={'1vw'} >
                        В современных реалиях обывателю невероятно трудно разобраться в тонкостях законодательства и судебных процессов в одиночку.
                        Я стану вашим союзником и компаньоном, помогу разобраться в самых сложных, казалось безвыходных ситуациях.
                        Вы можете написать мне на почту или в What's Up, а также позвонить по телефону.
                    </Text>
                </Box>
            </Flex>
        </Flex>


    let padAll = '5vw'

    if (window.innerWidth < 600){
        padAll = '5vw'
    }


    if (window.innerWidth < 1000){
        picture = <Box
            w={'90%'}
            color={'#2d334a'}
            justify={'center'}
            fontFamily={'CasperRegular'}
            bg={'white'}
            borderRadius={'20px'}
        >
            <Box
                align={'center'}
                maxWidth={'500px'}
                flex-direction={'column'}
            >
                <Center >
                    <Text
                        fontSize={fsH}
                        color={'#272343'}
                        align={'center'}
                        mb={'0px'}
                        fontFamily={'CasperBoldItalic'}
                        mt={'5px'}
                        p={'5px'}
                    >
                        Что мне делать сейчас?
                    </Text>
                </Center>
                <Text align={'justify'} fontSize={fs} p={'12px'} >
                    В современных реалиях обывателю невероятно трудно разобраться в тонкостях законодательства и судебных процессов в одиночку.
                    Я стану вашим союзником и компаньоном, помогу разобраться в самых сложных, казалось безвыходных ситуациях.
                    Вы можете написать мне на почту или в What's Up, а также позвонить по телефону.
                </Text>
            </Box>
            <Box
                maxWidth={'500px'}
                align={'center'}
                m={'0 30px'}
            >
                <SVGMan width={'100%'} height={'50%'}/>
            </Box>
        </Box>
    }

    return (
        <>
            {picture}
        </>
    )
}

export default Man
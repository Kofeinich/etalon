import React from 'react';
import {
    Text, Flex, Box, Center,
} from '@chakra-ui/react';
import SVGBooks from "../../templates/svg/home-page/SVGBooks";
import useWindowWidth from "../window";


const Books = () => {
    const w = useWindowWidth()
    let fsH='34px'
    let fs = '18px'
    if (w < 520){
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
                    <SVGBooks width={'100%'} height={'100%'}/>
                </Box>
                <Box
                    align={'left'}
                    maxWidth={'500px'}
                    minHeight={'400px'}
                    pb={'40px'}
                >
                    <Center >
                        <Text
                            fontSize={fsH}
                            color={'#272343'}
                            align={'center'}
                            mb={'0px'}
                            fontFamily={'CasperBoldItalic'}
                            mt={'5px'}
                            mr={'15px'}
                        >
                            Зачем обращаться к юристу?
                        </Text>
                    </Center>
                    <Text align={'justify'} fontSize={fs} p={'1vw'} >
                        Сегодня никто не застра&shy;хован от ситуаций,
                        в кото&shy;рых может по&shy;требо&shy;ваться юри&shy;дичес&shy;кая по&shy;мощь.
                        Непра&shy;вомерный иск от ба&shy;нка, се&shy;мей&shy;ный кон&shy;фликт или труд&shy;ности
                        с реги&shy;страцией но&shy;вой ком&shy;пании - все эти про&shy;блемы, ко&shy;торые ре&shy;шаются
                        профес&shy;сиональ&shy;ными юристами в крат&shy;чайшее время.
                    </Text>
                </Box>
            </Flex>
        </Flex>


    let padAll = '5vw'

    if (w < 600){
        padAll = '5vw'
    }


    if (w < 1000){
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
                maxWidth={'400px'}
                flex-direction={'column'}
            >
                <Center >
                    <Text
                        fontSize={fsH}
                        color={'#272343'}
                        align={'center'}
                        mb={'0px'}
                        fontFamily={'CasperBoldItalic'}
                        p={'5px'}
                    >
                        Зачем обращаться к адвокату или юристу?
                    </Text>
                </Center>
                <Text align={'justify'} fontSize={fs} p={'12px'} >
                    Сегодня никто не застра&shy;хован от ситуаций,
                    в кото&shy;рых может по&shy;требо&shy;ваться юри&shy;дичес&shy;кая по&shy;мощь.
                    Непра&shy;вомерный иск от ба&shy;нка, се&shy;мей&shy;ный кон&shy;фликт или труд&shy;ности
                    с реги&shy;страцией но&shy;вой ком&shy;пании - все эти про&shy;блемы, ко&shy;торые ре&shy;шаются
                    профес&shy;сиональ&shy;ными юристами в крат&shy;чайшее время.
                </Text>
            </Box>
            <Box
                maxWidth={'500px'}
                align={'center'}
                m={'0 30px'}
            >
                <SVGBooks width={'100%'} height={'100%'}/>
            </Box>
        </Box>
    }

    return(
        <>
            {picture}
        </>
    )
}
export default Books
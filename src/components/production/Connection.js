import React from 'react';
import {
    Text, Flex, Box, Center,
} from '@chakra-ui/react';
import SVGConnection from "../../templates/svg/home-page/SVGConnection";
import useWindowWidth from "../window";

const Connection = () => {

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
                            mt={'5px'}
                        >
                            Могу я сам разобраться?
                        </Text>
                    </Center>
                    <Text align={'justify'} fontSize={fs} p={'2vw'} >
                        &nbsp;&nbsp;Многие уверены в том, что смогут разобраться в юриспруденции самостоятельно. Однако статистика говорит об обратном. Только одному человеку из десяти удается достичь желаемого.
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Люди, которые решились представлять свои интересы в суде в одиночку, говорят о том, что в итоге им пришлось обратиться к профессионалам, но было уже поздно. Мы рекомендуем не затягивать и обращаться за помощью как можно скорее.
                    </Text>
                </Box>
                <Box
                    maxWidth={'500px'}
                    align={'right'}
                    m={'0 30px'}
                >
                    <SVGConnection width={'100%'} height={'100%'}/>
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
                        Могу я сам разобраться?
                    </Text>
                </Center>
                <Text align={'justify'} fontSize={fs} p={'12px'} >
                    &nbsp;&nbsp;Многие уверены в том, что смогут разобраться в юриспруденции самостоятельно. Однако статистика говорит об обратном. Только одному человеку из десяти удается достичь желаемого.
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;Люди, которые решились представлять свои интересы в суде в одиночку, говорят о том, что в итоге им пришлось обратиться к профессионалам, но было уже поздно. Мы рекомендуем не затягивать и обращаться за помощью как можно скорее.
                </Text>
            </Box>
            <Box
                maxWidth={'500px'}
                align={'center'}
                m={'0 30px'}
            >
                <SVGConnection width={'100%'} height={'100%'}/>
            </Box>
        </Box>
    }

    return (
        <>
            {picture}
        </>
    )
}

export default Connection
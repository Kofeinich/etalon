import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import SVGHer from "../../templates/svg/svg-views/SVGHer";
import useWindowWidth from "../window";

const Her = () => {
    let mt='10vh'
    let fsH='36px'
    let fs = 'lg'
    let fs2 = '22px'
    let mbx = '120px'

    return (
        <>
            <Flex
                m={'0px'}
                justify={'center'}
                w={'100%'}
            >
                <Box
                    w={'100%'}
                    maxWidth={'600px'}
                >
                    <SVGHer width={'100%'} height={'100%'}/>
                </Box>
            </Flex>
            <Box
                mt={mt}
                fontFamily={'CasperRegular'}
                mb={mbx}
            >
                <Flex
                    justify={'center'}
                    w={'100vw'}
                >
                        <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'} fontSize={fsH}>Практика по наследственным спорам</Text>
                </Flex>


            </Box>
        </>
    )
}
export default Her
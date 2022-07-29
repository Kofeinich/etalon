import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import SVGEstate from "../../templates/svg/svg-views/SVGEstate";
import useWindowWidth from "../window";

const Estate = () => {
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
                    <SVGEstate width={'100%'} height={'100%'}/>
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
                        <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'}  fontSize={fsH}>Практика - сделки с недвижимостью</Text>
                </Flex>


            </Box>
        </>
    )
}
export default Estate
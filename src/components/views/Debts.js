import {Box, Flex, Text} from "@chakra-ui/react";
import React from "react";
import SVGDebts from "../../templates/svg/svg-views/SVGDebts";
import useWindowWidth from "../window";


const Debts = () => {
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
                    <SVGDebts width={'100%'} height={'100%'}/>
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
                        <Text m={'0px'} w={'100%'} color={'#ffb300'} align='center' fontFamily={'CasperBold'} fontSize={fsH}>Практика по взысканию долгов</Text>
                </Flex>



            </Box>
        </>
    )
}
export default Debts
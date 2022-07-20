import React from 'react';
import {
    Button,
    Modal,
    Text, Flex, Box,
} from '@chakra-ui/react';
import Logo from "../../templates/svg/Logo";
import MailButton from "../mail/MailButton";


const HeaderBlockButton = () => {
    return (
        <Flex
            justify={'center'}
        >
            <Box>
                <Logo/>
            </Box>
            <Box mt={'6px'} ml={'3px'}>
                <MailButton/>
            </Box>
        </Flex>
    )
}
export default HeaderBlockButton
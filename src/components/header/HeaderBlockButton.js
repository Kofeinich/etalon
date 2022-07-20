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
            <Logo/>
            <MailButton/>
        </Flex>
    )
}
export default HeaderBlockButton
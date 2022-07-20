import {
    Button,
    Modal,
    Text, Flex, Box, useDisclosure,
} from '@chakra-ui/react';
import React from "react";
import EmailMobileModal from "./MailModal";


const MailButton = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    let bgCol = '#ffb300'

    return (
        <Box
            position={'static'}
            fontFamily={'CasperRegular'}
        >
            <Button
                _hover={{
                    border: '2px solid #272343'
                }}
                onClick={onOpen}
                h="44px"
                position={'static'}
                w="170px"
                borderRadius="4px"
                border={'none'}
                bg={bgCol}
                z-index='55'
            >
                <Text color="#272343" fontSize="16px" >Задать вопрос</Text>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <EmailMobileModal isOpen={isOpen} onClose={onClose}/>
            </Modal>
        </Box>
    )
}

export default MailButton
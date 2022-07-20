import {
    Button,
    Modal,
    Text, Flex, Box, useDisclosure,
} from '@chakra-ui/react';
import React from "react";
import EmailMobileModal from "./MailModal";


const MailButton = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    let bgCol = '#07575b'
    let borderC = '2px solid #07575b'

    return (
        <Box position={'static'}>
            <Button
                _hover={{
                    border: '2px solid #c4dfe6'
                }}
                onClick={onOpen}
                h="42px"
                position={'static'}
                w="215px"
                borderRadius="4px"
                border={borderC}
                bg={bgCol}
                z-index='55'
            >
                <Text color="white" fontFamily={'Verdana'} fontSize="12px" >Записаться на консультацию</Text>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <EmailMobileModal isOpen={isOpen} onClose={onClose}/>
            </Modal>
        </Box>
    )
}

export default MailButton
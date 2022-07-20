import CloseIcon from '@mui/icons-material/Close';
import {Box, FormLabel, FormErrorMessage, FormHelperText, Input, Flex, ModalOverlay, ModalBody, ModalContent, FormControl, Text, useDisclosure} from "@chakra-ui/react";
import React, { useState } from 'react';
import EmailForm from "./EmailForm";

const MailModal = ({isOpen, onClose}) => {

    let m = '20px'
    let mt = '100px'
    if (window.innerWidth > 440){
        let width = window.innerWidth
        let eps = (width - 400)/2
        m = eps
    }

    if (window.innerHeight > 700){
        mt = '170px'
    }



    return (
        <>
            <ModalOverlay
                bg='#c4dfe6.500'
                backdropFilter='blur(2px) hue-rotate(340deg)'
            />
            <ModalContent isOpen={isOpen} onClose={onClose}
                          mt={mt}
                          w='100vw'
                          maxWidth={'400px'}
                          mr={m}
                          ml={m}
                          h='60vh'
                          minHeight={'480px'}
                          maxHeight={'680px'}
                          color={'#FFFFFF'}
                          bg={'#c4dfe6'}
                          align={'center'}
                          borderRadius={'16px'}
                          fontFamily={'Verdana'}
                          border={'2px solid #c4dfe6'}
            >
                <ModalBody>
                    <Flex
                        justify={'space-between'}
                        align={'center'}
                        borderBottom={'3px solid #07575b'}
                        pb={'5px'}
                    >
                        <Box w='17.5px' h='37.5px'>
                        </Box>
                        <Box
                            w={'80%'}
                            pl={'0px'}
                            pr={'0px'}
                        >
                            <Text fontSize={'16px'} color={'#07575b'}>Задай свой вопрос прямо сейчас!</Text>
                        </Box>
                        <Box align={'right'} mt={'0px'} mr='12px' borderRadius='6px' w='37.5px' h='37.5px'
                             fontSize={'large'} bg={'#07575b'} color={'white'} position={'relative'}
                        >
                            <CloseIcon m={'auto'} top={'0'} left={'0'} right={'0'} bottom={'0'} position={'absolute'} fontSize={'large'} onClick={onClose}/>
                        </Box>
                    </Flex>
                    <Box
                        mt={'20px'}
                    >
                        <EmailForm/>
                    </Box>
                </ModalBody>
            </ModalContent>
        </>
    )
}

export default MailModal
import {
    Box,
    Button,
    Input,
    Flex,
    Stack,
    chakra,
    Text, Textarea
} from "@chakra-ui/react";
import React, {useState} from 'react';
import {Form, Field, Formik, FormikHelpers} from 'formik';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';


const EmailForm = () => {

    return (
        <Formik
            initialValues={{name: '', email: '', phone: '', body: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Это необходимое поле';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Неправильный e-mail';
                }
                if (!values.name) {
                    errors.name = 'Это необходимое поле';
                }
                if (
                    values.phone !== '' && !/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/i.test(values.phone)
                ) {
                    errors.phone = "Неправильный номер телефона"
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    if (values.phone === '') {
                        values.phone = null
                    }
                    fetch('/api/send_email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(values)
                    })
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <Box align={'center'}>
                    <Stack spacing={3}>
                        <Flex
                            justify={'center'}
                        >
                            <Box align={'right'} color={'#07575b'}
                            >
                                <AccountCircleRoundedIcon/>
                            </Box>
                            <Box align={'left'}>
                                <Field
                                    h={'90%'}
                                    as={Input} name="name" type="text" placeholder='Имя'
                                    border={'none'}
                                    fontSize={'16px'}
                                    bg={'#c4dfe6'}
                                    color={'rgb(66, 66, 66)'} ml={'5px'} pr={'3px'} pl={'0px'}
                                    outline={'none'}
                                />
                            </Box>
                        </Flex>
                        <Flex
                            justify={'center'}
                        >
                            <Box align={'right'} color={'#07575b'}
                            >
                                <AlternateEmailRoundedIcon/>
                            </Box>
                            <Box align={'left'}>
                                <Field
                                    h={'90%'}
                                    as={Input} name="email" type="email" placeholder='E-mail'
                                    border={'none'}
                                    bg={'#c4dfe6'}
                                    fontSize={'16px'}
                                    color={'rgb(66, 66, 66)'} ml={'5px'} pr={'3px'} pl={'0px'}
                                    outline={'none'}
                                />
                            </Box>
                        </Flex>
                        <Flex
                            justify={'center'}

                        >
                            <Box align={'right'} color={'#07575b'}
                            >
                                <PhoneIphoneRoundedIcon/>
                            </Box>
                            <Box align={'left'}>
                                <Field
                                    h={'90%'}
                                    as={Input} name="phone" type="text" placeholder='Номер телефона'
                                    border={'none'}
                                    bg={'#c4dfe6'}
                                    fontSize={'16px'}
                                    color={'rgb(66, 66, 66)'} ml={'5px'} pr={'3px'} pl={'0px'}
                                    outline={'none'}
                                />
                            </Box>
                        </Flex>
                    </Stack>
                    <Box
                        mt={'10px'}
                    >
                        <Field maxWidth={'400px'} as={Textarea} p={'3px'} mt="8px" name="body" type="text" placeholder='Ваш вопрос'
                               w={'60%'} h={'10vh'} border={'1px solid #07575b'}
                               borderRadius={'6px'} color={'rgb(55,55,55)'}
                               bg={'#c4dfe6'}
                               outline={'none'}
                        />
                        <Text aligh='center' w={'80%'} fontSize={'12px'}>
                            <chakra.span color={'rgb(66,66,66)'}>Нажимая кнопку</chakra.span>
                            <chakra.span color='blue'> Отправить</chakra.span>
                            <chakra.span color={'rgb(66,66,66)'}> вы соглашаетесь на обработку персональных данных</chakra.span>
                        </Text>
                        <Box>
                            <Button
                                _hover={{
                                    background: '#c4dfe6',
                                    color: '#07575b',
                                    border: '2px solid #07575b'
                                }}
                                h="48px"
                                w="215px"
                                mt={'5vh'}
                                bg={'#07575b'}
                                borderRadius="8px"
                                type="submit"
                                border={'none'}
                                fontSize="16px"
                                color="white"
                            >
                                Отправить
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Form>
        </Formik>
    )
}
export default EmailForm
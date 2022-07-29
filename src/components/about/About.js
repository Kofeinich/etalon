import {Center, Text, Box, Flex} from "@chakra-ui/react";
import React from 'react';
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"
import WindowWidth from "../window";
import useWindowWidth from "../window";


const About = ({ className }) => {
    let mt='35px'
    let fsH='34px'
    let fs = '18px'
    let w = '80%'
    return (
        <Box mt={mt}
             position={'static'}
             fontFamily={'CasperRegular'}
             color={'#2d334a'}
        >
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                <Flex
                    fontFamily={'CasperBold'}
                >
                    <Text m={'0px'} w={'100%'} color={'#272343'} align='center' fontSize={fsH}>Юридические услуги в Новороссийске</Text>
                </Flex>
            </Flex>
            <Flex
                justify={'center'}
                w={'100vw'}
            >
                <Flex
                    maxWidth={'1200px'}
                    display={'column'}
                >
                    <p className={'musor'}>
                        Меня зо­вут Вла­ди­мир. Мой стаж адво­кат­ской дея­тель­ности 15 лет.
                        Я спе­ци­али­зируюсь на ре­ше­нии слож­ных дел, для ре­ше­ния ко­то­рых тре­бу­ется
                        не­стан­дарт­ный под­ход.
                        Осно­вная спе­циали­зация — это су­деб­ные спо­ры, арбит­раж­ные су­ды, суды общей юри­сдик­ции, юри­ди­чес­кое со­про­вож­дение биз­не­са,
                        за­щита прав граж­дан в суде. Сотру­дни­чаю с вы­соко­квали­фици­ро­ванными юри­стами,
                        имею­щими бо­га­тый опыт ра­боты в раз­лич­ных отра­слях пра­ва,
                        а также с иными спе­циали­стами — оцен­щи­ка­ми, ауди­то­ра­ми, арбит­раж­ными
                        упра­вляю­щими. Рад буду вам помочь.
                    </p>
                </Flex>
            </Flex>
        </Box>
    )
}

export default About
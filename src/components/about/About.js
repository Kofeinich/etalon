import {Center, Text, Box, Flex} from "@chakra-ui/react";
import React from 'react';
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"

let mt='10vh'
let fsH='34px'
let fs = '18px'
let w = '80%'
if (window.innerWidth < 520){
    mt='30px'
    fsH='22px'
    fs='16px'
    w = '90%'
}

const About = ({ className }) => (

    <StaticQuery
        query={graphql`
        query {
        file(relativePath: { eq: "prof2.jpg" }) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
                }
            }
        }
     }
        `}
        render={data => {
            return (

                <Box mt={mt}
                     fontFamily={'CasperRegular'}
                     color={'#2d334a'}
                >
                    <Flex
                        justify={'center'}
                        w={'100vw'}
                    >
                        <Flex
                            w={'80%'}
                            fontFamily={'CasperBold'}
                        >
                            <Text m={'0px'} w={'100%'} color={'#272343'} align='center' fontSize={fsH}>Юридические услуги в Краснодарском крае<br></br> и Новороссийске</Text>
                        </Flex>
                    </Flex>
                    <Flex
                        justify={'center'}
                        p={'10px'}
                    >
                        <Img
                            fixed={data.file.childImageSharp.fixed}
                            objectFit="cover"
                            objectPosition="50% 50%"
                            alt=""
                        />
                    </Flex>
                    <Flex
                        justify={'center'}
                        w={'100vw'}
                    >
                        <Flex w={w} maxWidth={'700px'} justify={'space-between'}>
                            <Text  mt={'20px'} w={'100%'} color={'black'} align='left' fontSize={fs}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Меня зо­вут Вла­ди­мир. Мой стаж адво­кат­ской дея­тель­ности 15 лет. Я спе­ци­али­зируюсь на ре­ше­нии слож­ных дел, для ре­ше­ния ко­то­рых тре­бу­ется не­стан­дарт­ный под­ход.
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Осно­вная спе­циали­зация — это су­деб­ные спо­ры, арбит­раж­ные су­ды, суды общей юри­сдик­ции, юри­ди­чес­кое со­про­вож­дение биз­не­са, за­щита прав граж­дан в суде. Сотру­дни­чаю с вы­соко­квали­фици­ро­ванными юри­стами, имею­щими бо­га­тый опыт ра­боты в раз­лич­ных отра­слях пра­ва, а также с иными спе­циали­стами — оцен­щи­ка­ми, ауди­то­ра­ми, арбит­раж­ными упра­вляю­щими. Рад буду вам помочь.
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            )
        }}
    />
)

export default About
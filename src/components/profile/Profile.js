import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"
import {
    Text, Flex, Box, Input, Grid, Center,
} from '@chakra-ui/react';
import CustomImage from "../../templates/image/CustomImage";



const Profile = ({ className }) => (
    <StaticQuery
        query={graphql
            `query {
                desktop: file(relativePath: { eq: "background.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                file(relativePath: { eq: "profile.png" }) {
                    childImageSharp {
                        fixed(width: 180, height: 180) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    fluid={imageData}
                    backgroundColor={`#eceff1`}
                >
                    <Flex
                        w={'100vw'}
                        h={'calc(40vh - 80px)'}
                        fontFamily={'CasperRegular'}
                        justify={'center'}
                    >
                        {/*<Img
                                className={className}
                                fixed={data.file.childImageSharp.fixed}
                                objectFit="cover"
                                objectPosition="50% 50%"
                                alt=""
                            />*/}
                        <Center
                            maxWidth={'800px'}
                            p={'0px'}
                            m={'0px'}
                            h={'calc(40vh - 80px)'}
                            w={'100%'}
                            color={"#eceff1"}
                        >
                            <Box
                                p={'20px'}
                                align={'center'}
                            >
                                <Text
                                    mb="0px"
                                    align={'center'}
                                    fontSize='3xl'
                                    fontFamily={'CasperBold'}
                                >
                                    Владимир Конюхов
                                </Text>
                                <Text
                                    maxWidth={'400px'}
                                    fontFamily={'CasperBoldItalic'}
                                    color={'#ffb300'}
                                    mt="10px"
                                    align={'center'}
                                    fontSize='md'
                                >
                                    Более 20 лет решения сложных юридических вопросов
                                </Text>
                            </Box>
                        </Center>
                    </Flex>
                </BackgroundImage>
            )
        }}
    />
)

export default Profile

import React from 'react';
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Her from "../components/views/Her";

const HerPage = () => (
    <chakra.section id={'nas'} about={'Наследственные споры в Новороссийске и Краснодарском крае'}>
        <Seo title="Наследственные споры" />
        <Header/>
        <Her/>
        <Footer/>
    </chakra.section>
)

export default HerPage
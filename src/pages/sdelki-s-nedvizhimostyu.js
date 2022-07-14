import React from 'react';
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const EstatePage = () => (
    <chakra.section id={'sde'} about={'Недвижимость, договор купли-продажи в Новороссийске и Краснодарском крае'}>
        <Seo title="Сделки с недвижимостью" />
        <Header/>
        <Footer/>
    </chakra.section>
)

export default EstatePage
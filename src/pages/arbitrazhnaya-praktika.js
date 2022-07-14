import React from 'react';
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const ArbitragePage = () => (
    <chakra.section id={'arb'} about={'Арбитражные дела в Новороссийске и Краснодарском крае'}>
        <Seo title="Арбитражная практика" />
        <Header/>
        <Footer/>
    </chakra.section>
)

export default ArbitragePage
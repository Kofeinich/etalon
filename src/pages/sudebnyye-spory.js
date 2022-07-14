import React from 'react';
import { Link } from "gatsby"
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const LitPage = () => (
    <chakra.section id={'sud'} about={'Судебные споры и адвокатская практика в Новороссийске и Краснодарском крае'}>
        <Seo title="Судебные споры" />
        <Header/>
        <Footer/>
    </chakra.section>
)

export default LitPage
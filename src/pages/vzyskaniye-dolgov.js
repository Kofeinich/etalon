import React from 'react';
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Debts from "../components/views/Debts";

const DebtsPage = () => (
    <chakra.section id={'vzy'} about={'Взыскание долгов и задолженностей в Новороссийске и Краснодарском крае'}>
        <Seo title="Взыскание задолженности" />
        <Header/>
        <Debts/>
        <Footer/>
    </chakra.section>
)

export default DebtsPage
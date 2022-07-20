import React from 'react';
import { Link } from "gatsby"
import Seo from "../components/seo"
import { chakra } from '@chakra-ui/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Family from "../components/views/Family";

const FamilyPage = () => (
    <chakra.section id={'sem'} about={'Семейные дела, брачный договор, бракоразводный процесс в Новороссийске и Краснодарском крае'}>
        <Seo title="Семейные споры" />
        <Header/>
        <Family/>
        <Footer/>
    </chakra.section>
)

export default FamilyPage
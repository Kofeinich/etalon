import React from 'react';
import Seo from "../components/seo"
import Footer from "../components/footer/Footer";
import "../templates/css/normalise.css"
import Map from "../components/map/Map";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";
import { chakra } from '@chakra-ui/react';

const IndexPage = () => (
  <chakra.section id={'ind'} about={'Адвокат, юрист поможет в Новороссийске и Краснодарском крае'} >
      <Header/>
      <Seo title="Юридические услуги в Новороссийске" />
      <Profile/>
      <Map/>
      <Footer/>
  </chakra.section>
)

export default IndexPage

import React from 'react';
import Seo from "../components/seo"
import Footer from "../components/footer/Footer";
import "../templates/css/normalise.css"
import Map from "../components/map/Map";
import Profile from "../components/profile/Profile";
import Header from "../components/header/Header";
import { chakra } from '@chakra-ui/react';
import About from "../components/about/About";
import Production from "../components/production/Production";
import Attachments from "../components/attachments/Attachments";
import useWindowWidth from "../components/window";


const IndexPage = () => {

      return (
          <chakra.section id={'ind'} about={'Адвокат, юрист поможет в Новороссийске и Краснодарском крае'}>
                <Seo title="Юридические услуги в Новороссийске"/>
                <Header/>
                <Profile/>
                <About/>
                <Production/>
                <Attachments/>
                <Map/>
                <Footer/>
          </chakra.section>
      )
}

export default IndexPage

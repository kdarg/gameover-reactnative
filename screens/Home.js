import React from 'react';
import MyCarousel from '../components/MyCarousel';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import ComingSoon from '../components/ComingSoon';
import OnSale from '../components/OnSale';
import Footer from '../components/Footer';

ComingSoon
const Home = () =>{
    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>    
            <MyCarousel/>
            <ComingSoon/>
            <OnSale/>
            <Footer/>
        </ScrollView>
    )
}

export default Home;
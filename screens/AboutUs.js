import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import Footer from '../components/Footer';

const AboutUs = () =>{
    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            <Text style={{color:'white'}}>HOLA ABOUT</Text>
            <Footer/>
        </ScrollView>
    )
}

export default AboutUs;
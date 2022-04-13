import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import Footer from '../components/Footer';

const Games = () =>{
    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            <Text style={{color:'white'}}>HOLA GAMES</Text>
            <Footer/>
        </ScrollView>
    )
}

export default Games;
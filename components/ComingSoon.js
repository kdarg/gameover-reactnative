import React from "react";
import Carousel from "react-native-snap-carousel";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const ComingSoon = () => {

    return (
        <View style={styles.containerCominSoon}>
            <Image source={require('../assets/comingsoon.png')} style={styles.image}></Image>
        </View>
    );
};

const styles = StyleSheet.create({

    containerCominSoon:{
        display: "flex",
        // backgroundColor:'orange',
        alignItems: "center",
        // justifyContent: "center",
        height: 70,
    },
    image:{
        // backgroundColor:'red',
        height: 70,
        width: "100%",
    },

});

export default ComingSoon;
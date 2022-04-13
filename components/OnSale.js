import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const OnSale = () => {

    return (
        <View style={styles.containerCominSoon}>
            <Image source={require('../assets/onsale.png')} style={styles.image}></Image>
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
        width: "60%",
    },

});

export default OnSale;

import React, {useState, useEffect } from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList  } from '@react-navigation/drawer';
import { StackHome, StackGames, StackSignUp,StackLogIn,StackAboutUs } from './Stack';
import { connect } from 'react-redux';
import { Image } from 'react-native'
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, ToastAndroid} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import usersActions from '../redux/actions/usersActions';

const Drawer = createDrawerNavigator()

const DrawerNavigator = (props) => {

function Logo() {
    return (
    <Image style={{ width: 50, height: 50, marginRight: 13,resizeMode:'contain'}} source={require('../assets/newlogo.png')}/>
    )
}

return (

    <Drawer.Navigator  >

        <Drawer.Screen name="Home" component={StackHome} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } } />

        <Drawer.Screen name="Games" component={StackGames} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>
        <Drawer.Screen name="About us" component={StackAboutUs} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>
        <Drawer.Screen name="Log in" component={StackLogIn} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>
        <Drawer.Screen name="Sign up" component={StackSignUp} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></> } }/>

        {/* {!token && <Drawer.Screen name="Log in" component={StackLogIn} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>}

        {!token && <Drawer.Screen name="Sign up" component={StackSignUp} options={{ headerRight: (props) => <Logo {...props}/> , headerTitle: () => <></>}}/>} */}

    </Drawer.Navigator>

);
} 


const mapStateToProps = (state) => {
    return{
        user:state.userReducer.user,
    }
}

const mapDispatchToProps = {
    // VerifyToken: usersActions.VerifyToken,
    signOutUser: usersActions.signOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)

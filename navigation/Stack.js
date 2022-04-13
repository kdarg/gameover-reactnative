import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Games from '../screens/Games'
import GamesDetails from '../screens/GamesDetails'
import LogIn from '../screens/LogIn'
import AboutUs from '../screens/AboutUs'
import SignUp from '../screens/SignUp'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

export const StackHome = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={Home}/>
        </Stack.Navigator>
    )
}
export const StackGames = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='games' component={Games}/>
            {/* <Stack.Screen name='gamesDetails' component={GamesDetails}/> */}
        </Stack.Navigator>
    )
}

export const StackAboutUs = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackAboutUs' component={AboutUs}/>
        </Stack.Navigator>
    )
}

export const StackSignUp = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackSignUp' component={SignUp}/>
        </Stack.Navigator>
    )
}

export const StackLogIn = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackLogIn' component={LogIn}/>
        </Stack.Navigator>
    )
}

export const StackCart = () => {
    return( 
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='stackCart' component={Cart}/>
        </Stack.Navigator>
    )
}
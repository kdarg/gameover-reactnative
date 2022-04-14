import React from 'react';
import Footer from '../components/Footer';
import gamesActions from '../redux/actions/gamesActions';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { useEffect, useState } from "react";
import { Button } from 'react-native-elements'


const Games = (props) =>{

    const [unfilteredGames, setunfilteredGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            try{
                await props.fetchGames()

            } catch(error) {
                console.log(error)
            }
        }
        fetchGames()
    }, [])

    const inputsearch = (e) => {
        props.filterGames({games: unfilteredGames}, e, null)
    }

    useEffect(() => {
        if(props.games.length > unfilteredGames.length){
            setunfilteredGames(props.games)
        }
    },[props.games])


    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            {/* <TopThree/> */}
            <View style={styles.containergames}>
            <TouchableWithoutFeedback >
            <View style={styles.boxSearch}>
                <TextInput style={styles.search} onChangeText={inputsearch} placeholder='Search by game..'/>
            </View>
            </TouchableWithoutFeedback>
            </View>
            <ScrollView style={styles.citiesContainer}>
            <View style={styles.mapContainer}>
                {(props.games.length !== 0) ? props.games.map ((game, index) => {
                return (
                    <View style={styles.boxCity} key={index}>
                    {/* <TouchableOpacity onPress={() => {
                                props.navigation.navigate('city', {
                                    id: game._id
                                })
                            }}> */}

                            
                        <View style={styles.boxCities}>
                            <Image source={{uri:`https://game-over-shop.herokuapp.com/assets/gamesImages/${game.src}`}} style={styles.image}/>
                            <Text style={styles.place}>{game.gameName} </Text>

                            <Button title="ADD TO CART" buttonStyle={styles.addtocart} onPress={() => props.addToShop(game)}/>
                        </View>
                    {/* </TouchableOpacity> */}
                    </View>
                )
            }): <View style={styles.noResultsContainer}>
                    <Text style={styles.noResults}>- No results to show -</Text>
                    <Text style={styles.noResults}>Please try again.</Text>
                    {/* <Image style={styles.imageNoResult} source={require('../assets/noresult.png')}></Image> */}
                </View>
            }
            </View>
        </ScrollView>



            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    addtocart:{
        padding: 10,
    },
    containergames:{
        marginTop:20,
    },
    search: {
        fontSize: 14,
        padding: "2.5%",
        color: "black",
        marginTop: 50,
        
    },
    boxSearch: {
        borderColor: "#9e9ba0",
        borderWidth: 2,
        width: "60%",
        marginBottom: "2%",
        borderRadius: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        marginTop: "5%",
    },

    image:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        width: "100%",
        // marginTop: 25,
        borderRadius: 50,
    },
    citiesContainer:{
        width: "100%",
        height: "100%",
    },
    popularTitle:{
        color: "white",
        letterSpacing: 1,
        textShadowColor:"rgb(112, 3, 45)",
        textShadowOffset:{width: 1.5, height: 0.5},
        textShadowRadius: 5,
        fontFamily:"CroissantOne_400Regular",
        fontSize:20,
        width: "100%",
        marginBottom: 20,
        // marginTop: 25,
        textAlign:"center"
    },
    popular:{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 30,
        // marginTop: 20,
    },
    mainContainer: {
        flex: 1,
        height: "100%",
        backgroundColor:'rgb(255, 234, 252)',
    },
    mapContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'red',
    },
    search: {
        fontSize: 14,
        padding: "2.5%",
        color: "black",
        
    },
    boxCity: {
        width: "90%",
        borderRadius: 15,
        height: 450,
        marginVertical: "3%",
    },
    boxCities:{
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height: 450,
        borderRadius: 50,
        
    },
    place: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        fontFamily:"ZenLoop_400Regular",
        textAlign: "center",
        padding: 20,
        // backgroundColor: "white",
    },
    noResultsContainer: {
        marginTop: "5%",
        marginBottom: "5%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
        backgroundColor:"white",
    },
    noResults: {
        color: "black",
        fontSize: 18,
        fontWeight: "500",
        padding: "2%",
    },
    imageNoResult:{
        width: 100,
        height: 200,
    },
})

const mapStateToProps = (state) => {
    return {
        games: state.gamesReducer.games,
    }
}

const mapDispatchToProps = {
    fetchGames: gamesActions.fetchGames,
    filterGames: gamesActions.filterGames
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import Footer from '../components/Footer';
import gamesActions from '../redux/actions/gamesActions';
import { connect } from "react-redux";
import { useEffect, useState } from "react"
import { Button } from 'react-native-elements'

const Cart = (props) =>{
    console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log(props.inShopGames)
    
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (props.inShopGames) {
            let iterator = 0;
            props.inShopGames.map((game) => {
                iterator += game.price;
            });
            console.log('chauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')
            console.log(iterator)
            setTotal(iterator);
        }
    },[props.inShopGames])

    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            <View>
                {props.inShopGames?.map((game) => {

                    return(

                        <View  key={game._id}>
                            <Text style={{color:'#fff'}}>{game.gameName}</Text>
                            <Text style={{color:'#fff'}}>{game.price}</Text>
                            <Button title="DELETE" buttonStyle={styles.addtocart} onPress={() => props.deleteFromShop(game)}/>
                        </View>
                    )

                })}
                <Text style={{color:'#fff'}}>Total:</Text>
                <Text style={{color:'#fff'}}>{total}</Text>

            </View>




            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    addtocart:{
        backgroundColor: "#00A3CE",
        color: "white",
        alignSelf: "center",
        alignItems:"center",
        borderRadius:10,
        width:150,
        height:50,
        borderColor: "#fff",
        borderWidth: 1,
        marginTop:15,
    }
})


const mapStateToProps = (state) => {
    return {
	    // games:state.gamesReducer.games,
	    inShopGames:state.gamesReducer.inShopGames
    }
}
const mapDispatchToProps = {
    deleteFromShop: gamesActions.deleteFromShop
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


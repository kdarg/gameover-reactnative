import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import Footer from '../components/Footer';

const AboutUs = () =>{
    return(
        <ScrollView style={{backgroundColor:'#1f1f24'}}>
            <View style={styles.containerAbout}>
            <Text style={{color:'#DD7CFF',marginTop:2}}>WE CARE ABOUT GAMES</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>GAME OVER is a digital distribution platform with a curated selection of games, a "you buy it, you own it" philosophy, and utmost care about customers.</Text>

            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/searching.png")} style={styles.imageone}/>
            <Text style={{color:"#00C3F6", marginTop:3}}> Hand-picking the best in gaming</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>A selection of great DRM-free games, from modern hits to all-time classics, that you really shouldn't miss.</Text>
            <Image source={require("../assets/aboutImages/winer.png")} style={styles.imagetwo}/>
            <Text style={{color:"#00C3F6", marginTop:3}}> A curated selection of games</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>From exceptional AAAs, unique indies to the best of classic gaming. Every game is here because we chose it for you.</Text>
            <Image source={require("../assets/aboutImages/surprise.png")} style={styles.imagetwo}/>
            <Text style={{color:"#00C3F6", marginTop:3}}> Feeding your inner collector</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> Offering games with as many goodies as possible is the GAME OVER way - even if it means exploring our long forgotten basements and attics.</Text>
            </View>

            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/user.png")} style={styles.imageone}/>
            <Text style={{color:"#885dff", marginTop:3}}>Customer-centric approach</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>Delivering a user-friendly support enriched with additional customer benefits.</Text>
            <Image source={require("../assets/aboutImages/support.png")} style={styles.imagetwo}/>
            <Text style={{color:"#885dff", marginTop:3}}> Stellar support</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>We bring you the comfort in knowing that anytime you need help, we're right here for you. Our customer support team works in-house round-the-clock solving all games-related issues.</Text>
            <Image source={require("../assets/aboutImages/cashback.png")} style={styles.imagetwo}/>
            <Text style={{color:"#885dff", marginTop:3}}>No risk, full refunds</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> Feel safe about your purchase - get your money back if a game doesn't work for you, cancel pre-orders, and get a refund on games in development within 30 days of purchase - no strings attached.</Text>
            </View>

            <View style={styles.gamingInfo}>
            <Image source={require("../assets/aboutImages/more.png")} style={styles.imageone}/>
            <Text style={{color:"#BA40E1", marginTop:3}}>More</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>Delivering a user-friendly support enriched with additional customer benefits.</Text>
            <Image source={require("../assets/aboutImages/owner.png")} style={styles.imagetwo}/>
            <Text style={{color:"#BA40E1", marginTop:3}}>Owning the things you buy</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}>We don't believe in controlling you and your games. Here, you won't be locked out of titles you paid for, or constantly asked to prove you own them - this is DRM-free gaming.</Text>
            <Image source={require("../assets/aboutImages/settings.png")} style={styles.imagetwo}/>
            <Text style={{color:"#BA40E1", marginTop:3}}>An optional gaming client</Text>
            <Text style={{color:'white', textAlign: "center", marginTop:3}}> GAME OVER Galaxy is the tailor-made optional client that adds features like cloud saves, update roll-backs, crossplay, achievements, is a convenient way to install & update games, and stay in touch with friends.</Text>
            </View>
{/*             
            <View>
            <Text style={{color:'white', textAlign: "center", marginTop:10}}>OUR PARTNERS AND ALLIES.</Text>
            <View style={styles.containerAllies}>
             <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/unity.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/ea.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/capcom.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/play.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/ubisoft.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/neogeo.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/2k.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/konami.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/activision.png")} style={styles.imageallies}/>
            </View>
            <View style={styles.logoAllies}>  
            <Image source={require("../assets/aboutImages/nintendo.png")} style={styles.imageallies}/>
            </View>
            
            
          
           
   </View>  

            </View>
 */}


            </View>
            <Footer/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    containerAbout:{
        marginTop: 20,
        textAlign: "center",
        alignItems:"center",
        color:'white',
        padding: 30,               
    },
    gamingInfo:{
        marginTop: 13,
        textAlign: "center",
        alignItems:"center",
         paddingHorizontal:10,
    },
    imageone:{
      width: 52,
      height: 52,
      marginTop:15,  
    },
    imagetwo:{
        width: 35,
        height: 35,
        marginTop:15,  
      },
    //   containerAllies:{
    //     display:"flex",
    //     width:"100%",
    //     flexDirection:"row",
    //     flexWrap:"wrap",
    //     marginTop:5,
      
    //   },
    //   logoAllies:{
    //    height:54,
    //    width:62, 
    //    marginHorizontal:15,
    //    marginVertical:8,  
    //   },

    //   imageallies:{
    //   height:30,
     
    //   }



})
export default AboutUs;


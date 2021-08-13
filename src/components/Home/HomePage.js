import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity,LogBox} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import {useDispatch} from "react-redux";
import {removeUserData} from "../../redux/action_creator/auth-action";
const HomePage = ({navigation}) => {
    const dispatch = useDispatch()
    useFocusEffect(
        React.useCallback(() => {
            dispatch(removeUserData())
            LogBox.ignoreLogs(['source.uri should not be an empty string']);
            return () => null;
        }, [])
    );
  return(
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={require('../../../assets/github.png')}
                   style={styles.logo}
            resizeMode="stretch"/>
         </View>
          <View style={styles.footer}>
              <Text style={styles.title}>Stay connected with everyone!</Text>
              <Text style={{color:'#989898'}}>Sign in with GitHub</Text>
              <TouchableOpacity activeOpacity={0.5}
                  onPress={() => navigation.navigate('Log In')}
                                style={styles.button}>
                  <Text style={styles.text}>Get Started</Text>
                  <AntDesign name="right" size={24} color="#fe921f" />
              </TouchableOpacity>
          </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f08000'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:2,
        backgroundColor: '#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'flex-end',
        justifyContent:'space-around'
    },
    logo:{
        width:150,
        height:150
    },
    text: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: "600",
        color: '#fe921f'
    },
title:{
    fontSize: 26,
    color: '#ad7d65',
    fontWeight: 'bold'
},


    button: {
        flexDirection:'row',
        height: 50,
        width:200,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor:'#fff',
        borderWidth: 2,
        borderColor:'#fe921f',
        marginBottom:'20%',
        borderRadius: 13,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
})

export default HomePage

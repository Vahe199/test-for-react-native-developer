import React from "react";
import { StyleSheet} from "react-native";
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
const DrawerContent = (props) => {
    return(
        <LinearGradient
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#faab22', '#f16909']}
            style={styles.container}>
            <DrawerContentScrollView  {...props}>
                <DrawerItem label={'Log Out'} style={styles.buttonTerms}
                            icon={() =><Entypo name="log-out" size={24} color="#222222bd" />}
                            onPress={()=>props.navigation.navigate('Home Page')}>

                </DrawerItem>
            </DrawerContentScrollView>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({

container:{
    flex: 1,
    paddingTop:100,
},

    label:{
        color: '#fff',
        fontSize:18,
        paddingHorizontal:25,
        paddingVertical:-20
    },
    buttonTerms:{
        color:'#fff',
        borderTopWidth:1,
        borderTopColor: '#fff',
        marginTop:0,
        height:45
    }
})
export default DrawerContent;

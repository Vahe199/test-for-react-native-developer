import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {useSelector} from "react-redux";


export const Header = (props) => {
const {user,avatar_url} = useSelector(state => state.auth)

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#F16708','#FAB023' ]}
                start={{x: 0, y: 0}}
                end={{x: 1.2, y: 0}}
                style={styles.background}>
                <View style={styles.header}>
                    <AntDesign name="menufold" size={24} color="black"
                               onPress={() => props.navigation.openDrawer()}/>
                    <Text style={{fontSize:20}}>{user}</Text>
                    <Image source={{uri:avatar_url}} resizeMode='repeat' style={{width:50,height:50}}/>

                </View>
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F16708',
    },
    header: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})

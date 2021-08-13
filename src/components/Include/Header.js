import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";


export const Header = (props) => {


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#F16708','#FAB023' ]}
                start={{x: 0, y: 0}}
                end={{x: 1.2, y: 0}}
                style={styles.background}>
                <View style={styles.header}>
                   <MaterialIcons name='menu' size={35} onPress={() => props.navigation.openDrawer()}
                                         style={styles.icon}/>
                    <Text>header</Text>

                </View>
            </LinearGradient>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F16708',
        alignItems: 'flex-end',
        elevation:10,
        zIndex:3,
    },
    background: {
        width: '100%',
        height: 80,
        marginTop: 32,
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

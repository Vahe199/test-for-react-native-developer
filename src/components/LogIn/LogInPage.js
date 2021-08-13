import React, {useEffect, useState} from "react";
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {AntDesign, EvilIcons, Feather} from '@expo/vector-icons';
import {Formik} from 'formik';
import * as Yup from "yup";
import {getUserData} from "../../redux/action_creator/auth-action";
import {useDispatch, useSelector} from "react-redux";

const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .required('Required'),
});
const LoginPage = ({navigation}) => {
const dispatch = useDispatch()
    const [err, setErr] = useState(false)
    const {error,user} = useSelector(state => state.auth)
useEffect(()=>{
    if(error){
        setErr(true)
    }else if(user){
        navigation.navigate('Users')
    }
},[error,user])
    const sendFormData = async (values) => {
        await dispatch(getUserData(values.login))
    }
    return (<View style={styles.container}>
        <View style={styles.header}>
            {err &&<Text style={styles.err}>Incorrect Login Name</Text>}
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Formik
                    initialValues={{login: '', pass: ''}}
                     validationSchema={SignupSchema}
                    onSubmit={(values, action) => {
                         sendFormData(values)

                        action.resetForm();
                    }}
                >
                    {(props) => (
                        <View>
                            <Text style={styles.text_footer}>Login</Text>
                            <View style={styles.action}>
                                <EvilIcons name="user" size={20} color="#05375a"/>
                                <TextInput
                                    value={props.values.login}
                                    onChangeText={props.handleChange('login')}
                                    placeholder='Your Login'
                                    autoCapitalize='none'
                                    style={styles.textInput}/>
                            </View>
                            {props.errors.login && props.touched.login ? (
                                <Text style={[styles.warning]}>{props.errors.login}</Text>

                            ) : null}

                            <Text style={[styles.text_footer, {marginTop: 35}]}>Password: optional fields</Text>

                            <View style={styles.action}>
                                <AntDesign name="unlock" size={18} color="#05375a"/>
                                <TextInput
                                    value={props.values.pass}
                                    onChangeText={props.handleChange('pass')}
                                    placeholder='Your password'
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                    style={styles.textInput}/>
                            </View>
                            <TouchableOpacity activeOpacity={0.5}
                                              onPress={props.handleSubmit}
                                              style={styles.button}>
                                <Text style={styles.textBtn}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </View>
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f08000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: '#c50000',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
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

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSize: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textBtn: {
        fontSize: 22,
        lineHeight: 25,
        fontWeight: "600",
        color: '#fff',
    },
    warning: {
         position:'absolute',
         right:15,
        color: '#f44336',
        textAlign:'right',
        fontSize:11,

    },
    err:{
        textAlign: 'center',
        fontSize:22,
        fontWeight:'bold',
        color:'red'
    }
})

export default LoginPage;

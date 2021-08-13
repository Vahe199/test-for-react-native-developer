import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Header} from "../components/Include/Header";
import HomePage from "../components/Home/HomePage";
import UsersPage from "../components/Users/UsersPage";
import LoginPage from "../components/LogIn/LogInPage";
const Stack = createStackNavigator();

const StackContent = (props) => (
    <Stack.Navigator  initialRouteName="Home Page" screenOptions={{

        header:(props)=><Header {...props}/>,
        headerStyle: {
            backgroundColor: '#f16708',
        }
    }}>
        <Stack.Screen name={"Home Page"} options={{
            headerShown:false
        }} component={HomePage}/>
        <Stack.Screen name={"Log In"}options={{
            headerShown:false
        }} component={LoginPage}/>
        <Stack.Screen name={"Users"} component={UsersPage}/>
    </Stack.Navigator>
)

export default StackContent;


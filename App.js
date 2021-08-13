import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from '@react-navigation/drawer'
import DrawerContent from "./src/navigation/DrawerContent";
import StackContent from "./src/navigation/StackContent";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";
import {StatusBar} from "react-native";

const Drawer = createDrawerNavigator()
export default function App() {
  return (
      <Provider store={store}>
          <StatusBar backgroundColor="#f08000" />
        <NavigationContainer>
            {/*option to use   @react-navigation/drawer*/}

          <Drawer.Navigator drawerContent={props =>
              <DrawerContent {...props}/>}
          >
            <Drawer.Screen  name={'Root'} component={StackContent} options={{headerShown: false}} />
          </Drawer.Navigator>
          {/*  <StackContent/>*/}
        </NavigationContainer>
      </Provider>
  );
}

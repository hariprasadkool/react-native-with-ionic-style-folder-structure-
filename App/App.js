import React, { Component } from 'react';
import { Platform,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from "react-navigation";

// Pages
import Home from './src/pages/home/home';
import Profile from './src/pages/profile/profile';
import Drawer  from "./Drawer";


const Navigation = StackNavigator(
  {   
    Drawer: {
      screen: Drawer,
      navigationOptions:({navigation}) => ({
      title: "WoWCricket",
        headerLeft:(
          <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
            <Icon name="ios-menu" size={30} />
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 10, paddingLeft: 10 }
      })
    },
    Home: {
      screen: Home
    },   
    Profile: {
      screen: Profile
    }
  },
  {
      initialRouteName: "Drawer",
      //headerMode: "none",
  }
);

export default Navigation;

import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerNavigator } from 'react-navigation';

// Pages
import Home from './src/pages/home/home';
import Profile from './src/pages/profile/profile';


const Drawer = DrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "HomePage",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />
      }
    }
  }
);

export default Drawer;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from "react-navigation";
import styles from './home.css';
import Footer from '../../sections/footer/footer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class Home extends Component<Props> {

  render() {
    const navigate = this.props.navigation.navigate;
      return (
        <View style={styles.container}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>
              {instructions}
            </Text>
          </View>
          <Footer   
           HomeTab = {() => navigate('Home') }
           ProfileTab = {() => navigate('Profile') }
          />
        </View>
      );
    }
  }

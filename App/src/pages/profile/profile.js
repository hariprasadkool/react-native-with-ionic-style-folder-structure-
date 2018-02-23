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
import {TextInput} from '@shoutem/ui';
 
import styles from './profile.css';
import Footer from '../../sections/footer/footer';
type Props = {};

export default class Profile extends Component<Props> {

  render() {
    const navigate = this.props.navigation.navigate;
      return (
        <View style={styles.container}>
          <TextInput
            placeholder={'Username or email'}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry
          />
          <View style={styles.body}>
          </View>
          <Footer   
            HomeTab = {() => navigate('Home') }
            ProfileTab = {() => navigate('Profile') }
          />
        </View>
      );
    }
  }

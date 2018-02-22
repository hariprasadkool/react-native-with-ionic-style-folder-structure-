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
import {TextInput} from '@shoutem/ui';
 
import styles from './profile.css';
type Props = {};

export default class Profile extends Component<Props> {

  render() {
      return (
        <View style={styles.container}>
          <TextInput
            placeholder={'Username or email'}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry
          />
        </View>
      );
    }
  }

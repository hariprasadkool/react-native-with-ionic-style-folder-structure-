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

import styles from './footer.css';

type Props = {};

export default class Footer extends Component<Props> {
    constructor(props) {
      super(props);
        HomeTab = this.props.HomeTab;
        ProfileTab = this.props.ProfileTab;
    }
    render() {
      return (
        <View style={styles.container}>  
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem} onPress={HomeTab}>
              <Icon name="home" size={25}/>
              <Text style={styles.tabTitle}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={ProfileTab}>
              <Icon name="person" size={25}/>
              <Text style={styles.tabTitle}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

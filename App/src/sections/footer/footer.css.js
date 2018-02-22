import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    tabBar:{
     backgroundColor: 'white',
     height: 60,
     borderTopWidth: 0.5,
     borderColor: '#E5E5E5', //it is slightly darker than white
     flexDirection: 'row',
     justifyContent: 'space-around'
    },
    tabItem:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabTitle:{
      fontSize: 11,
      color:'#c3c3c3',
      paddingTop: 4
    }
  });
  
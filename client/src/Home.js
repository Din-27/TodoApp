import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native'


const Home = () => {


  return (
    <View style={styles.container}>
        <Image style={{width: 300, height: 200, marginTop: 120, marginLeft: 50}} source={require('../assets/home (2).png')}/>
        <Text style={{marginLeft: 120, fontSize: 30, fontWeight:'bold', color: '#fff'}}>Todo App</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF7878',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
    }
  });
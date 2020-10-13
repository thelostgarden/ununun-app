import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Audio } from 'expo-av';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

const soundObject = new Audio.Sound();

async function playSound()  {
  try {
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      require('./assets/sound.mp3'),
      { shouldPlay: true }
    );
  } catch (error) {}
}



const Regi = () => {
  return (
    <View style={style.container}>
      <Pressable onPress={playSound}>
    <Image
     source={require('./assets/img.png')}
    />
    </Pressable>
    </View>     
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Regi;


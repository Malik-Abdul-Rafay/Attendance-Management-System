import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Leave from './src/screens/Leave';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sen-Bold': require('./assets/fonts/Sen-Bold.ttf'),
    'Sen-ExtraBold': require('./assets/fonts/Sen-ExtraBold.ttf'),
    'Sen-Medium': require('./assets/fonts/Sen-Medium.ttf'),
    'Sen-Regular': require('./assets/fonts/Sen-Regular.ttf'),
    'Sen-SemiBold': require('./assets/fonts/Sen-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or a loading spinner component
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor='white' />
      {/* <HomeScreen /> */}
      <Leave />
    </>
  );
}

const styles = StyleSheet.create({});

import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useFonts, Calistoga_400Regular } from '@expo-google-fonts/calistoga';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';

import { Routes } from './src/routes';
import { Register } from '@screens/Register';
import { SignIn } from '@screens/SignIn';

export default function App(){
  
  const [fontsLoaded] = useFonts({
    Calistoga_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded){
    return <ActivityIndicator size={100} color={theme.COLORS.RED} />
  };
  
  return (
    <ThemeProvider theme={theme} >

      <StatusBar style="light" translucent backgroundColor="transparent" />

      {/*
        <Routes/>
      */}

      <SignIn />

    </ThemeProvider>
  )
}


/*


<MotiView 
      from={{
        opacity: 0,
        width: 400,
      }}
      animate={{
        opacity: 1,
        width: 60,
      }}
      transition={{
        type: "timing",
        duration: 2000
      }}style={{

        backgroundColor: theme.COLORS.BACKGROUND_MENU,
        flex: 1, width: 60, alignItems: "center", justifyContent: "center"
      }}>


          <Text style={{
            color: theme.COLORS.TEXT_OPACITY, 
            fontFamily: theme.FONTS.TITLE,
            fontSize: 20, 
            transform: [{ rotate: "270deg" }], 
            width: 300,
            textAlign: 'center', 
            letterSpacing: 10}}
            > Olá, Developer 
          </Text>


      </MotiView>


*/
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from "@screens/Home";
import { Search } from "@screens/Search";
import { Favorites } from "@screens/Favorites";
import { Profile } from "@screens/Profile";
import { ProfileUserNavigation } from "@screens/ProfileUserNavigation";
import { NewPost } from "@screens/NewPost";

import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CustomDrawerContent } from '@components/CustomDrawerContent';

const { Navigator, Screen, Group } = createDrawerNavigator();

export function UserRoutes(){
    const { COLORS, FONTS } = useTheme();

    return (

        <Navigator
            initialRouteName="Home"
            drawerContent={ () => {
                return (
                    // meu Menu customizado
                    <CustomDrawerContent type='primary' />
                )
            }}
            
            screenOptions={{
                drawerType: "slide", // arrasta conteúdo da tela pro lado
                overlayColor: 'transparent', // cor que a tela ao lado fica
                //quando for arrastada para o lado

                drawerStyle: {
                    flex: 1,
                    backgroundColor: COLORS.BACKGROUND_MENU,
                    width: RFValue(60),
                },

            }}
        >

            <Group>
                <Screen name="Home" component={Home} 
                    options={{
                        //headerTitle: 'Welcome'
                        headerShown: false,
                    }}
                />  

                <Screen name="Pesquisar" component={Search}
                options={{
                    //headerTitle: 'Welcome'
                    headerShown: false,
                }}
                />

                <Screen name="Favoritos" component={Favorites} 
                options={{
                    //headerTitle: 'Welcome'
                    headerShown: false,
                }}
                />

                <Screen name="Perfil" component={Profile} 
                options={{
                    //headerTitle: 'Welcome'
                    headerShown: false,
                }}
                />

                <Screen name="NewPost" component={NewPost} 
                options={{
                    headerShown: false,
                }}
                />

                <Screen name="ProfileUserNavigation" component={ProfileUserNavigation} 
                options={{
                    //headerTitle: 'Welcome'
                    headerShown: true,
                }}
                />
                
            </Group>
            
        </Navigator>

    )
};
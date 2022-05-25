import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';

import {
    Container,
    Header,
    Search,
    ButtonSearch,
    Title,
    ContainerUser,
    InfoUser,
    Name,
    About,
    ButtonAvatar,
    Avatar,
    Decorator
} from './styles';

import theme from '../../theme';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import {connections} from '@utils/contents';

import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export function QuantityConnectionsUser( ){

    const navigation = useNavigation();

    /*
    useEffect(() => {
        async function loadConnections(){
            await firestore().collection('connections')
            .doc(user?.id)
            .get()
            .then( response => {
                const about = response.data() as FormData;
                setAboutMe(about)
            });
        };
        loadUser();
    },[])
    */

    function handleNavigationProfileUser( id: string ){
        // foi tipado em @types a tela Profile, para dar certo
        navigation.navigate('ProfileUserNavigation', { id });
    };

    return (
        <Container>
            <Header>
                <ButtonIcon 
                    icon='arrow-back' 
                    color={theme.COLORS.LIME} 
                    onPress={ () => navigation.navigate('Profile')} 
                />
                <Title> conexões </Title>
            </Header>

            <Search>
                <Input
                size='medium'
                placeholder='Buscar uma conexão'
                autoCorrect={false}
                autoCapitalize="none"
                />

                <ButtonSearch>
                    <ButtonIcon
                    //isLoading={isLoading}
                    color={theme.COLORS.TEXT}
                    icon="search"
                    onPress={ () => alert('Buscando...') }
                    />
                </ButtonSearch>

            </Search>
            
            <FlatList
                data={connections}
                keyExtractor={item => item.id}
                
                renderItem = { ({item}) => (
                    <ContainerUser>
                        
                        <InfoUser>
                            <Name numberOfLines={1}> {item.name} </Name>
                            <About numberOfLines={1}> {item.about} </About>
                        </InfoUser>

                        <ButtonAvatar
                        onPress={ () => handleNavigationProfileUser(item.id) }
                        >
                            <Avatar source={{ uri: item.avatar }} />
                        </ButtonAvatar>

                        <Decorator/>

                    </ContainerUser>
                )}
                
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}

            />

        </Container>
    );
}
import React from 'react';
import {Text, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

type Props = {
    hideModal: () => void;
};

export function QuantityConnectionsUser( {hideModal} : Props ){
    return (
        <Container>

            <Header>
                <Title style={{color: '#fff'}}> Todas as conexões </Title>
                <ButtonIcon 
                    icon='close' 
                    color={theme.COLORS.LIME} 
                    onPress={hideModal} 
                />
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
                        onPress={ () => alert(item.name) }
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
import React, {useState} from 'react';
import { FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
    Container,
    Header,
    ButtonSearch
} from './styles';

import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { PostsHome, PostsHomeProps } from '@components/PostsHome';

import theme from '../../theme';
import {USER_PUBLICATE_HOME} from '@utils/contents'

export function Home(){
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Container>
            <Header>
                <Input
                size='medium'
                placeholder='O que procura?'
                autoCorrect={false}
                autoCapitalize="none"
                />

                <ButtonSearch>
                    <ButtonIcon
                    isLoading={isLoading}
                    color={theme.COLORS.TEXT}
                    icon="search"
                    onPress={ () => setIsLoading(!isLoading) }
                    />
                </ButtonSearch>
            </Header>

            <FlatList
                style={{flex: 1, marginTop: 40}}
                data={USER_PUBLICATE_HOME}
                keyExtractor={item => item.id}
                renderItem={ ({item}) => (

                    <PostsHome 
                        data={item}  
                    />
                
                ) }

                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='never' //clica na lista teclado fecha
            
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            />

        </Container>
    );
}
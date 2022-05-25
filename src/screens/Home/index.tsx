import React, { useState, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';

import {
    Container,
    Header,
    ButtonSearch
} from './styles';

import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { PostsHome, PostsHomeProps } from '@components/PostsHome';

import theme from '../../theme';

import { AuthContext } from '@hooks/auth';
import firestore from '@react-native-firebase/firestore';

import { useNavigation } from '@react-navigation/native';


export function Home( ){

    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    
    const [posts, setPosts] = useState<PostsHomeProps[]>([]);

    useEffect( () => {
        const subscriber = firestore()
        .collection('posts')
        .limit(15)
        .orderBy('createdPost', 'desc')
        .onSnapshot( querySnapshot => { // onSnapshot ver em tempo real
            const data = querySnapshot.docs.map( (doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }) as PostsHomeProps[];

            setPosts(data);
            setIsLoading(false);
        });

        return () => subscriber();
    },[]);

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
                data={posts}
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
import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';

import {
    PostUser,
    Container,
    ContentPost,
    AboutPost,
    Title,
    Likes,
    OwnerPost,
    Avatar,
    Level,
    ViewPost,
    Post,
    DeleteAnimation,
    ContentDeleteAnimation,
    TextDeleteAnimation,
    BorderDeleteAnimation
} from './styles';

import { Ionicons } from '@expo/vector-icons';
import { ButtonIcon } from '@components/ButtonIcon';

import theme from '../../theme';
import { USER_PUBLICATE_HOME } from '@utils/contents';

export function Favorites(){

    const [showPost, setShowPost] = useState('');
    const [viewDeleteAnimation, setViewDeleteAnimation] = useState(false);

    function handleShowContentPost(id: string){
        setShowPost(id);
    };

    function handleDeleteFavorite( id: string){
        Alert.alert(
            'Deletar',
            'Remover item de favoritos?',
            [ 
                {
                    text: 'Cancelar', 
                    style: 'cancel',
                },
                {
                    text: 'Remover',
                    onPress: () => handleConfirmeDelete(id)
                } 
            ]
        )
    };

    // somente para testes
    function returnFalse(){
        setViewDeleteAnimation(false);
    };

    function handleConfirmeDelete(id: string){
        setViewDeleteAnimation(true);

        setTimeout(returnFalse, 3000)
    };

    return (
        <Container>
            <FlatList
                data={USER_PUBLICATE_HOME}
                keyExtractor={item => item.id}
                
                renderItem = { ({item}) => (
                    <PostUser>
                        <ContentPost
                        onPress={ () => handleShowContentPost(item.id) }
                        onLongPress={ () => handleDeleteFavorite(item.id)}
                        >
                    
                            <AboutPost>
                                <Ionicons 
                                    name='rocket' 
                                    size={20} 
                                    color={theme.COLORS.LIME} 
                                    style={{ position: 'absolute', bottom: 0 }}
                                />
                                
                                <Title numberOfLines={1}> {item.titleContent} </Title>
                                <Likes> {item.likes} </Likes>
                            </AboutPost>

                            <OwnerPost>
                                <Avatar source={{uri: item.avatar}} />
                                <Level source={{uri: item.level}} />
                            </OwnerPost>
                        
                        </ContentPost>

                        { showPost === item.id && (
                            <ViewPost>
                                <ButtonIcon
                                icon='arrow-upward'
                                color={theme.COLORS.LIME}
                                onPress={ () => setShowPost('') }
                                />
                                <Post> {item.content} </Post>
                            </ViewPost>
                        )}
                    </PostUser>

                )}
                
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}

            />

            { viewDeleteAnimation && (
                <DeleteAnimation>
                    <ContentDeleteAnimation>
                        
                        <TextDeleteAnimation
                            
                            from = {{ opacity: 0 }}
                            animate = {{ opacity: 1 }}
                            transition = {{ loop: true, type: 'timing', duration: 700 }}
                        
                        >  Deletando... </TextDeleteAnimation>
                        
                        <BorderDeleteAnimation
                            from = {{ width: '10%', left: 0 }}
                            animate = {{ width: '100%' }}
                            transition = {{ type: 'timing', duration: 3000 }}
                        />

                    </ContentDeleteAnimation>
                </DeleteAnimation>
            ) }

        </Container>
    );
}
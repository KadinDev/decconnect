import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';

import {
    Container,
    UserContainer,
    UserContent,
    ButtonAvatar,
    Avatar,
    InfoAvatar,
    NameAvatar,
    AboutAvatar,
    AvatarLevel,
    Separator,
    TitlePost,
    ContentPost,
    Likes,
    ContentButtons,
    ViewLikes,
    Button,
    ViewOpenModal
} from './styles';

import theme from '../../theme';

// export para poder usar essa interface tbm em
// Home quando chamo o useState para a lista de posts
export interface PostsHomeProps {
    id: string;
    avatar: string;
    name: string;
    level: string;
    about: string;
    titleContent: string;
    content: string;
    likes: number;
    imagePost?: string;
};

interface Props {
    data: PostsHomeProps;
};

import { ContentModalPostUser } from '@components/ContentModalPostUser';

import { useNavigation } from '@react-navigation/native';

export function PostsHome( { data } : Props ){

    const [like, setLike] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [modal, setModal] = useState(false);

    const navigation = useNavigation();

    function handleNavigationProfileUser( ){
        navigation.navigate('Perfil' as never );
    };

    function handleLike(){
        setLike(!like);
    };

    function handleFavorite(){
        setFavorite(!favorite);;
    };

    function closeModal(){
        setModal(false);
    };

    return (
        <Container
        from = {{ opacity: 0, translateY: 300 }}
        animate = {{ opacity: 1, translateY: 0 }}
        transition = {{ type: 'timing', duration: 1000, delay: 100 }}
        >
            <UserContent>
                
                <UserContainer>
                    <ButtonAvatar
                        onPress={handleNavigationProfileUser}
                    >
                        <Avatar source={{uri: data.avatar}} />
                    </ButtonAvatar>
                
                    <InfoAvatar>
                        <NameAvatar> {data.name} </NameAvatar>
                        <AboutAvatar> {data.about} </AboutAvatar>
                    </InfoAvatar>
                </UserContainer>
                
                <AvatarLevel source={{uri: data.level}} />
            
            </UserContent>


            <Separator/>

            <TitlePost numberOfLines={1}> {data.titleContent} </TitlePost>
            <ContentPost numberOfLines={3}> {data.content} </ContentPost>
            

            <ContentButtons>
            
                <ViewLikes>  
                    <Button onPress={handleLike}>
                        <Ionicons 
                            name={ like ? 'rocket' : 'rocket-outline' } 
                            color={ like ? theme.COLORS.LIME : theme.COLORS.TEXT } 
                            size={25} 
                        />
                    </Button>

                    <Likes> {data.likes} </Likes>
                </ViewLikes>

                <ViewOpenModal>
                    <Button onPress={ () => setModal(true)}>
                        <Ionicons
                            name="eye" 
                            color={theme.COLORS.TEXT} 
                            size={25} 
                        />
                    </Button>
                </ViewOpenModal>
                
                <Button onPress={handleFavorite}>
                    <Ionicons 
                        name={ favorite ? 'bookmark' : 'bookmark-outline' } 
                        color={ favorite ? theme.COLORS.LIME : theme.COLORS.TEXT } 
                        size={25} 
                    />
                </Button>

            </ContentButtons>


            <Modal
                visible={modal}
                animationType="slide"
                transparent={true}
            >
                
                <ContentModalPostUser
                    user={data}
                    hideModal={closeModal}
                />

            </Modal>

        </Container>
    );
}
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
    area: string;
    about: string;
    titleContent: string;
    content: string;
    likes: number;
    imagePost?: string;
    level: number;
    postId: string; // ID DO DONO DO POST
};

interface Props {
    data: PostsHomeProps;
};

import { ContentModalPostUser } from '@components/ContentModalPostUser';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@hooks/auth';

import firestore from '@react-native-firebase/firestore';


export function PostsHome( { data } : Props ){
    const { user } = useAuth();
    const navigation = useNavigation();

    const [likeUser, setLikeUser] = useState(false);
    const [favorite, setFavorite] = useState(false);
    const [modal, setModal] = useState(false);

    function handleNavigationProfileUser(){
        
    };


    async function handleLike(
        id : string, 
        likes : number,
        postId : string,
        level : number
    ) {

        // criando doc com meu ID + ID do Post que curti
        const docId = `${user?.id}_${id}`;

        // check se vc já curtiu o post
        const doc = await firestore().collection('likes')
        .doc(docId).get();

        
        // aqui pego o ID do dono do POST que eu cliquei, nesse ID
        // recebo todas as informações cadastradas desse Dono
        const idDonorPost = await firestore().collection('developers')
        .doc(postId).get();
        
        //

        if(doc.exists){
            await firestore().collection('developers')
            .doc(idDonorPost.id).update({
                level: level - 1,
            });

            // quer dizer que já curtiu o post
            await firestore().collection('posts')
            .doc(id).update({
                likes: likes - 1,
            });
            
            await firestore().collection('likes')
            .doc(docId).delete();

            return;
        };

        // criando like no post
        await firestore().collection('likes')
        .doc(docId).set({
            postId: id,
            userId: user?.id,
        });

        // pega q quantidade de likes e soma 
        await firestore().collection('posts')
        .doc(id).update({
            likes: likes + 1,
        });
        
        // Aumentando level do dono do post
        // ARRUMAR ESSA PARTE
        await firestore().collection('developers')
        .doc(idDonorPost.id).update({ // pego pelo id, e mudo abaixo o que eu quiser
            level: level + 1,
        });
    };

    function handleFavorite(){
        setFavorite(!favorite);;
    };

    function closeModal(){
        setModal(false);
    };

    return (
        <Container
        from = {{ opacity: 0, translateY: 250 }}
        animate = {{ opacity: 1, translateY: 0 }}
        transition = {{ type: 'timing', duration: 500, delay: 50 }}
        >
            <UserContent>
                
                <UserContainer>
                    <ButtonAvatar
                        onPress={ () => handleNavigationProfileUser }
                    >
                        <Avatar source={{uri: data.avatar}} />
                    </ButtonAvatar>
                
                    <InfoAvatar>
                        <NameAvatar> {data.name} </NameAvatar>
                        <AboutAvatar> {data.about} </AboutAvatar>
                    </InfoAvatar>
                </UserContainer>
                
                {/* 
                { data.levelUser === 0 &&
                    <AvatarLevel source={{
                        uri: 'https://img.freepik.com/fotos-gratis/trofeu-de-bronze-em-ouro-rosa_92242-436.jpg'
                    }} />
                }

                { data.levelUser === 5 &&
                    <AvatarLevel source={{
                        uri: 'https://media.istockphoto.com/vectors/realistic-silver-trophy-isolated-with-text-space-vector-illustration-vector-id673107710'
                    }} />
                }

                { data.levelUser === 10 &&
                    <AvatarLevel source={{
                        uri: 'https://images.tcdn.com.br/img/img_prod/621757/trofeu_400861_prata_195_1_20200929113503.jpg'
                    }} />
                }
                */}
            
            </UserContent>


            <Separator/>

            <TitlePost numberOfLines={1}> {data.titleContent} </TitlePost>
            <ContentPost numberOfLines={3}> {data.content} </ContentPost>
            

            <ContentButtons>
            
                <ViewLikes>  
                    <Button onPress={ () => 
                        // passa tudo que for fazer na função
                        handleLike(
                            data.id, 
                            data.likes,
                            data.postId,
                            data.level
                        )}>
                        
                        <Ionicons 
                            name={ likeUser ? 'rocket' : 'rocket-outline' } 
                            color={ likeUser ? theme.COLORS.LIME : theme.COLORS.TEXT } 
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
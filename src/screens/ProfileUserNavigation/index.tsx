import React, { useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';

import {
    Container,
    ContentUser,
    PhotoUser,
    Name,
    About,
    DescriptionDev,
    Info,
    ViewStatus,
    QuantityPosts,
    ViewLevel,
    LevelUser,
    Likes,
    Friends,
    ViewPost,
    TitlePost,
} from './styles';

import { POSTS } from '@utils/listPosts';

import theme from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import { ButtonIcon } from '@components/ButtonIcon';

import { QuantityListPostsUser } from '@components/QuantityListPostsUser';
import { QuantityConnectionsUser } from '@components/QuantityConnectionsUser';

import { useAuth } from '@hooks/auth';
import firestore from '@react-native-firebase/firestore';

import { FormData } from '@screens/Register';

import { useNavigation, useRoute } from '@react-navigation/native';
import { UserProfileNavigationProps } from '@src/@types/navigation';

export function ProfileUserNavigation(){

    const navigation = useNavigation();
    // pegando id enviado pela rota
    const route = useRoute();
    const { id } = route.params as UserProfileNavigationProps;

    const [showButtonConnectNewDev, setShowButtonConnectNewDev] = useState(true);
    const [modal, setModal] = useState(false);
    const [replaceContentModal, setReplaceContentModal] = useState('posts');
    
    const [aboutMe, setAboutMe] = useState<FormData>();

    // LOAD INFO USER FROM ID USER
    useEffect( () => {
        // se tem o id, vai acessar o produto no formulario,
        // se não tem vai pro formulario vazio para cadastro
        if(id){
            firestore()
            .collection('developers')
            .doc(id) // selcionando um documento apenas
            .get()
            .then( response => {
                const about = response.data() as FormData;
                setAboutMe(about)
            });
        }
    },[id]); // id como dependencia*/
    // END LOAD

    // se for um usuário visitando seu perfil
    function handleConnectNewDev(){
        if(showButtonConnectNewDev === true){
            setShowButtonConnectNewDev(false); //convite enviado
            alert('Conectado com Ricardo.');
            return;
        };

        if(showButtonConnectNewDev === false){
            setShowButtonConnectNewDev(true);
            alert('Desconectado com Ricardo');
            return;
        };

    };

    // se for o dono do perfil
    function handleUpdatedPhoto(){
        alert('Atualizar foto de perfil')
    };

    // se for o dono do perfil
    function handleNewPost(){
        navigation.navigate('NewPost');
    };

    // para visitante e dono do perfil
    function handleViewFriends(){
        setReplaceContentModal('connected');
        setModal(true);
    };

    function handleShowAllPosts(){
        if (replaceContentModal === 'connected'){
            setReplaceContentModal('posts');
        };
        setModal(true);
    };

    function closeModal(){
        setModal(false);
    };

    
    return (
        <Container>
            <ContentUser>
                <View style={{width: '100%', alignItems: 'center', position: 'relative'}}>
                    <PhotoUser source={{ uri: aboutMe?.avatar }} />
                    <Name> { aboutMe?.name } </Name>
                    <About> { aboutMe?.area } </About>
                    <DescriptionDev> { aboutMe?.about } </DescriptionDev>

                    
                    <ButtonIcon
                    icon={showButtonConnectNewDev ? 'connect-without-contact' : 'check'}
                    color={showButtonConnectNewDev ? theme.COLORS.LIME : theme.COLORS.TEXT_OPACITY}
                    style={{position: 'absolute', top: RFValue(0), right: RFValue(90)}}
                    onPress={handleConnectNewDev}
                    />

                    

                </View>

                <Info>
                    <ViewStatus>
                        <QuantityPosts> 5.555 {'\n'} posts </QuantityPosts>
                    </ViewStatus>
            
                    <ViewLevel>
                        <LevelUser source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1986/1986987.png' }} />
                        <Likes> 100.550  </Likes>
                        <ButtonIcon
                        icon="done"
                        color={theme.COLORS.LIME}
                        activeOpacity={1}
                        />
                    </ViewLevel>
                    
                    <ViewStatus>
                        <ButtonIcon
                        icon="connect-without-contact"
                        color={theme.COLORS.LIME}
                        onPress={ handleViewFriends }
                        />
                        <Friends> 1.257 {'\n'} connected </Friends>
                    </ViewStatus>
                </Info>

                <Text style={{color: theme.COLORS.LIME, 
                    textAlign: 'left', marginTop: RFValue(10), fontSize: RFValue(15),
                    opacity: 0.7
                }}
                > 
                    Últimos envios
                </Text>

                {
                    POSTS.map((post) => {
                        return (
                            <ViewPost key={post.id}>
                                <TitlePost numberOfLines={2}> {post.titleContent} </TitlePost>

                                <ButtonIcon
                                icon="arrow-right-alt"
                                color={theme.COLORS.TEXT}
                                onPress={ handleNewPost }
                                />
                        
                            </ViewPost>
                        )
                    })
                }
                
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleShowAllPosts}
                >
                    <Text style={{color: theme.COLORS.TEXT_OPACITY, 
                        textAlign: 'right', fontSize: RFValue(15),
                        paddingBottom: RFValue(30)}}> ...ver todos
                    </Text>
                </TouchableOpacity>
                
                <Modal
                    visible={modal}
                    animationType="slide"
                    transparent={true}
                >
                    { replaceContentModal === 'posts' ? (
                        <QuantityListPostsUser
                            hideModal={closeModal}
                        />
                    ) : 
                        <QuantityConnectionsUser
                            hideModal={closeModal}
                        />
                    }
                    
                </Modal>

            </ContentUser>
        </Container>
    );
}
import React, { useState } from 'react';
import { Modal, KeyboardAvoidingView, View, TouchableOpacity, Text } from 'react-native';

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
import { Input } from '@components/Input';

import { QuantityListPostsUser } from '@components/QuantityListPostsUser';
import { QuantityConnectionsUser } from '@components/QuantityConnectionsUser';

export function Profile(){

    const [user, setUser] = useState(true);
    const [showButtonConnectNewDev, setShowButtonConnectNewDev] = useState(true);
    const [modal, setModal] = useState(false);
    const [replaceContentModal, setReplaceContentModal] = useState('posts');
    
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
        alert('Novo Post')
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

    /* fazer a ideia de:
    se o user logado for o dono do perfil, aparecer as opções 
    de atualizar imagem, enviar novo post, editar post, deletar.
    */
    return (
        <Container>
            <ContentUser>
                <View style={{width: '100%', alignItems: 'center', position: 'relative'}}>
                    <PhotoUser source={{ uri: 'https://www.github.com/kadindev.png'}} />
                    <Name> Ricardo Correa </Name>
                    <About> Mobile Developer </About>
                    <DescriptionDev>
                    Trilhando no universo Web e Mobile Developer desde 2019. 
                    Possui experiência na atuação como Desenvolvedor Mobile (React Native, Typescript, Javascript) e como Desenvolvedor Web, Front e Back (React Js, Node, Express, MySql...).

                    Apaixonado por tecnologia, onde sempre busca a evolução e o conhecimento necessário para que o levem a fazer o trabalho sempre com honra e perfeição.

                    Passou por programas de treinamentos Mobile e Web da instituição de ensino Rocketseat (Bootcamps)
                    e Bootcamp MySQL com o instrutor Colt Steele.
                    </DescriptionDev>

                    { user ? (
                        <ButtonIcon
                        icon="update"
                        color={theme.COLORS.LIME}
                        style={{position: 'absolute', top: RFValue(0), right: RFValue(90)}}
                        onPress={handleUpdatedPhoto}
                        />

                    ) : (

                        <ButtonIcon
                        icon={showButtonConnectNewDev ? 'connect-without-contact' : 'check'}
                        color={showButtonConnectNewDev ? theme.COLORS.LIME : theme.COLORS.TEXT_OPACITY}
                        style={{position: 'absolute', top: RFValue(0), right: RFValue(90)}}
                        onPress={handleConnectNewDev}
                        />

                    )}

                </View>

                <Info>
                    <ViewStatus>
                        { user && (
                            <ButtonIcon
                            icon="add-box"
                            color={theme.COLORS.LIME}
                            onPress={ handleNewPost }
                            />
                        ) }
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
                        textAlign: 'right', fontSize: RFValue(15)}}> ...ver todos
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
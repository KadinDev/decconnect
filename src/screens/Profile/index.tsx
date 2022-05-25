import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

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

import { useAuth } from '@hooks/auth';
import firestore from '@react-native-firebase/firestore';

import { FormData } from '@screens/Register';
import { useNavigation } from '@react-navigation/native';

export function Profile(){
    const {user} = useAuth();
    const navigation = useNavigation();
    const [showButtonConnectNewDev, setShowButtonConnectNewDev] = useState(true);
    const [aboutMe, setAboutMe] = useState<FormData>();

    // LOAD INFO USER FROM ID USER
    useEffect(() => {
        async function loadUser(){
            await firestore().collection('developers')
            .doc(user?.id)
            .get()
            .then( response => {
                const about = response.data() as FormData;
                setAboutMe(about)
            });
        };
        loadUser();
    },[])
    // END LOAD

    // se for o dono do perfil
    function handleUpdatedPhoto(){
        alert('Atualizar foto de perfil')
    };

    // se for o dono do perfil
    function handleNewPost(){
        navigation.navigate('NewPost');
    };


    return (
        <Container>
            <ContentUser>
                <View style={{width: '100%', alignItems: 'center', position: 'relative'}}>
                    <PhotoUser source={{ uri: aboutMe?.avatar }} />
                    <Name> { aboutMe?.name } </Name>
                    <About> { aboutMe?.area } </About>
                    <DescriptionDev> {aboutMe?.about} </DescriptionDev>

                    <ButtonIcon
                    icon="update"
                    color={theme.COLORS.LIME}
                    style={{position: 'absolute', top: RFValue(0), right: RFValue(90)}}
                    onPress={handleUpdatedPhoto}
                    />

                </View>

                <Info>
                    <ViewStatus>
                        <ButtonIcon
                        icon="add-box"
                        color={theme.COLORS.LIME}
                        onPress={ handleNewPost }
                        />
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
                        onPress={ () => navigation.navigate('Connections') }
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
                onPress={() => alert('Ver posts')}
                >
                    <Text style={{color: theme.COLORS.TEXT_OPACITY, 
                        textAlign: 'right', fontSize: RFValue(15),
                        paddingBottom: RFValue(30)}}> ...ver todos
                    </Text>
                </TouchableOpacity>

            </ContentUser>
        </Container>
    );
}
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

import { useNavigation, useRoute } from '@react-navigation/native';
import { UserProfileNavigationProps } from '@src/@types/navigation';

export function ProfileUserNavigation(){
    const navigation = useNavigation();
    // pegando id enviado pela rota
    const route = useRoute();
    const { id } = route.params as UserProfileNavigationProps;

    const [showButtonConnectNewDev, setShowButtonConnectNewDev] = useState(true);
    const [aboutMe, setAboutMe] = useState<FormData>();

    // LOAD INFO USER FROM ID USER
    useEffect( () => {
        // se tem o id, vai acessar o produto no formulario,
        // se não tem vai pro formulario vazio para cadastro

        if(id){ // id do usuário que eu cliquei para ver 
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

                    <ButtonIcon
                    icon='arrow-back'
                    color={theme.COLORS.LIME}
                    style={{position: 'absolute', top: RFValue(0), left: RFValue(90)}}
                    onPress={() => navigation.navigate('Connections')}
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

                        /* Acho que aqui vai ser preciso vai outra tela com as conexões do usuário que 
                        escolhi, e mandar o ID dele assim como recebi aqui. tentar essa possibilidade,
                        pois quando eu for ver as connections do usuário vou querer carregar as conexões dele.
                        igualmente a mesma ideia para os posts*/
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
                                onPress={ () => {} }
                                />
                        
                            </ViewPost>
                        )
                    })
                }
                
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {}}
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
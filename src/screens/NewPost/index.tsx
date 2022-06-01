import React, { useState, useEffect, useContext } from 'react';
import { Image, Alert, Keyboard, View } from 'react-native';

import {
    Container,
    Content,
    Header,
    Title,
    ViewImage,
    InputTitle,
    InputContent,
    Photo,
    Send,
} from './styles';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useAuth } from '@hooks/auth';

import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '@components/ButtonIcon';
import * as ImagePicker from 'expo-image-picker';
import { RFValue } from 'react-native-responsive-fontsize';

type UserProps = {
    level: string;
    area: string;
    avatar: string;
};

export function NewPost( { level, area, avatar} : UserProps ){
    const {user} = useAuth();
    const navigation = useNavigation();
    const { COLORS } = useTheme();
    
    const [isLoading, setIsLogging] = useState(false);
    const [levelUser, setLevelUser] = useState('');
    const [areaUser, setAreaUser] = useState('');
    
    const [avatarUrl, setAvatarUrl] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [uriImage, setUriImage] = useState('');

    useEffect(() => {
        async function loadUser(){
            await firestore().collection('developers')
            .doc(user?.id)
            .get()
            .then( response => {
                const about = response.data() as UserProps;
                setLevelUser(about.level);
                setAreaUser(about.area);
                setAvatarUrl(about.avatar);
            });
        };
        loadUser();
    },[])

    async function handlePickerImage(){
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if( status === 'granted' ) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4,4]
            });

            if(!result.cancelled){
                setUriImage(result.uri);
            }
        };
    };

    async function handleNewPost(){
        if(!uriImage) return Alert.alert('Imagem', 'Envie uma imagem para o post');
        if(!title) return Alert.alert('Título', 'Escolha um título para o post.');
        if(!content) return Alert.alert('Conteúdo', 'Escreva seu conteúdo para compartilhar.');
        
        setIsLogging(true);
       
        const fileName = new Date().getTime();
        const reference = storage().ref(`/imagesPosts/${fileName}.png`);
        await reference.putFile(uriImage);
        const photo_url = await reference.getDownloadURL();

        firestore().collection('posts')
        .add({
            avatar: avatarUrl,
            name: user?.name,
            levelUser: levelUser,
            about: areaUser,

            titleContent: title,
            content,
            createdPost: firestore.FieldValue.serverTimestamp(),
            imagePost: uriImage,
            photo_url,
            photo_path: reference.fullPath,
            nameSearch: title.toLowerCase().trim(),
            likes: 0,
            postId: user?.id, // informando que sou o dono do post
        })
        .then( () => {
            setIsLogging(false);
            navigation.navigate('Home');
        })
        .catch((error) => console.error(error));

        Keyboard.dismiss();
        setTitle('');
        setContent('');
        setUriImage('');
        setIsLogging(false);
    }

    return (
        <Container>
            <Content>
                <Header>
                    <ButtonIcon
                        onPress={() => navigation.navigate('Profile')}
                        icon='arrow-back'
                        color={COLORS.TEXT}
                        />
                    <Title> Compartilhar </Title>
                </Header>
            
                <InputTitle
                    placeholder='Título aqui ...'
                    autoCorrect={false}

                    value={title}
                    onChangeText={setTitle}
                />

                { uriImage != '' &&
                    <ViewImage>
                        <View style={{width: '70%', height: RFValue(150),
                        marginBottom: RFValue(10)}}
                        >
                            <Image
                            style={{flex: 1, resizeMode: 'contain', borderRadius: RFValue(20) }}
                            source={{ uri: uriImage }}
                            />
                        </View>

                        <ButtonIcon
                            onPress={() => setUriImage('')}
                            icon='delete'
                            color={COLORS.TEXT_OPACITY}
                        />
                    </ViewImage>
                }

                <InputContent
                    style={{textAlignVertical: 'top'}}
                    placeholder='Conteudo aqui ...'
                    autoCorrect={false}
                    multiline

                    value={content}
                    onChangeText={setContent}
                />
            
                <Photo>
                    <ButtonIcon
                        onPress={handlePickerImage}
                        icon='photo-library'
                        color={COLORS.LIME}
                    />
                </Photo>

                <Send>
                    <ButtonIcon
                        onPress={handleNewPost}
                        icon='send'
                        color={COLORS.LIME}
                        isLoading={isLoading}
                    />
                </Send>
                
            </Content>
        </Container>
    );
}
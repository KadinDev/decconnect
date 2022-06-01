import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import {
    Container,
    Content,
    HeaderUser,
    InfoUser,
    NameAvatar,
    AboutAvatar,
    AvatarLevel,
    Separator,
    TitlePost,
    ContentPost,
    ShowImagePost
} from './styles';

// ao invés de criar toda a interface novamente igual fiz no Home,
// só chamo para cá pois será do mesmo jeito que o do Home
import { PostsHomeProps } from '@components/PostsHome';
import { ButtonIcon } from '@components/ButtonIcon';

import theme from '../../theme';
import { Avatar } from '../PostsHome/styles';
import { RFValue } from 'react-native-responsive-fontsize';

type UserProps = {
    user: PostsHomeProps;
    hideModal: () => void;
};


export function ContentModalPostUser( { user, hideModal } : UserProps ){
    
    const [showImagePost, setShowImagePost] = useState(false);

    function handleViewPhotoPost(){
        setShowImagePost(true);
    };

    return (
        <Container>

            <HeaderUser>
            
                <ButtonIcon 
                onPress={hideModal}
                icon='keyboard-arrow-down'
                color={theme.COLORS.LIME}
                />

                <InfoUser>
                    <NameAvatar> {user.name} </NameAvatar>
                    <AboutAvatar> {user.about} </AboutAvatar>
                </InfoUser>

                <AvatarLevel 
                source={{ uri: user.avatar }} 
                style={{resizeMode: 'cover'}}
                />
            
            </HeaderUser>

            <Separator/>


            <Content>

                <TitlePost> {user.titleContent} </TitlePost>

                <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleViewPhotoPost}
                >
                    <Image
                    style={{
                        width: '100%',
                        height: RFValue(250),
                        resizeMode: 'contain',
                        borderRadius: RFValue(25)
                    }}
                    source={{ uri: user.imagePost }}
                    />
                </TouchableOpacity>

                <ContentPost> {user.content} </ContentPost>
                
            </Content>

        </Container>
    );
}
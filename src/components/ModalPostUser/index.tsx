import React, { useState } from 'react';

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
    ContentPost
} from './styles';

// ao invés de criar toda a interface novamente igual fiz no Home,
// só chamo para cá pois será do mesmo jeito que o do Home
import { PostsHomeProps } from '@components/PostsHome';
import { ButtonIcon } from '@components/ButtonIcon';

import theme from '../../theme';

type UserProps = {
    user: PostsHomeProps
    hideModal: () => void;
};

export function ModalPostUser( { user, hideModal } : UserProps ){
    
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

                <AvatarLevel source={{ uri: user.level }} />
            
            </HeaderUser>

            <Separator/>


            <Content>

                <TitlePost> {user.titleContent} </TitlePost>

                <ContentPost> {user.content} </ContentPost>
            </Content>

        </Container>
    );
}
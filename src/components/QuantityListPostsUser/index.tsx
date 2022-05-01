import React from 'react';

import {
    Container,
    Header,
    Title,
    Search,
    ButtonSearch,
    ViewPost,
    TitlePost
} from './styles';

import theme from '../../theme';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';

import { POSTS } from '@utils/listPosts';

type Props = {
    hideModal: () => void;
}

export function QuantityListPostsUser( {hideModal} : Props ){
    return (
        <Container>
            <Header>
                <Title style={{color: '#fff'}}> Todos os posts </Title>
                <ButtonIcon 
                    icon='close' 
                    color={theme.COLORS.LIME} 
                    onPress={hideModal} 
                />
            </Header>

            <Search>
                <Input
                size='medium'
                placeholder='Buscar um post'
                autoCorrect={false}
                autoCapitalize="none"
                />

                <ButtonSearch>
                    <ButtonIcon
                    //isLoading={isLoading}
                    color={theme.COLORS.TEXT}
                    icon="search"
                    onPress={ () => alert('Buscando...') }
                    />
                </ButtonSearch>

            </Search>


            {
                POSTS.map((post) => {
                    return (
                        <ViewPost key={post.id}>
                            <TitlePost numberOfLines={2}> {post.titleContent} </TitlePost>

                            <ButtonIcon
                            icon="arrow-right-alt"
                            color={theme.COLORS.TEXT}
                            //onPress={ handleNewPost }
                            />
                    
                        </ViewPost>
                    )
                })
            }

        </Container>
    );
}
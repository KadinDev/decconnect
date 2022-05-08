import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    TypeProps,
    Container,
    Title,
    Load
} from './styles';

type Props = RectButtonProps & {
    type?: TypeProps,
    title?: string,
    isLoading?: boolean,
    onPress: () => void,
};

export function Button({
    type = 'primary',
    title,
    isLoading = false,
    onPress,
    ...rest
    
} : Props ){

    return (
        <Container
            type={type}
            // enabled só será true se o isLoading for true
            enabled={!isLoading}
            onPress={onPress}
            { ...rest }
        >
            { isLoading ? <Load/> : <Title> {title} </Title> }

        </Container>
    );
}
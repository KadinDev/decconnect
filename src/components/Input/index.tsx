import React from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    TypeProps
} from './styles';

type Props = TextInputProps & {
    size: TypeProps;
};

export function Input( { size, ...rest } : Props ){
    return (
        <Container
            size={size}
            {...rest}   
        >
        </Container>
    )
}
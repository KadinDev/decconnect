import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    TypeProps
} from './styles';

// export o inputProps, para poder pegar em ControlledInput
export type InputProps = TextInputProps & {
    size: TypeProps;
    value?: string;
};

export function Input( { size, value, ...rest } : InputProps ){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false); // se o input está preenchido

    // quando input estiver em foco
    function handleInputFocus(){
        setIsFocused(true);
    };

    // quando sair do input
    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!value);
    };

    return (
        <Container
            size={size}
            {...rest}

            // quando clicar executa a função handleInputFocus
            onFocus={handleInputFocus}

            // quando eu sair do input executa a função handleInputBlur
            onBlur={handleInputBlur}

            isFocused={isFocused}
            value={value} // só aceitará valores em string
        >
        </Container>
    )
}
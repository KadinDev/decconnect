/*
    ESSE CONTROLLED INPUT ELE ESTÁ USANDO O REACT HOOK FORM,
    ELE VAI SER RESPONSAVEL POR CONTROLAR CADA INPUT DA MINHA APLICAÇÃO
    ONDE EU COLOQUEI
*/
import React from 'react';

import {
    Error,
    IconError
} from './styles';

import { Control, Controller, FieldError } from 'react-hook-form';

import { Input, InputProps } from '@components/Input';

// !! ATENÇÃO !!
// tipando esse ControlledInput

type Props = InputProps & {
    // o control é para dizer pro meu input que ele será controlado,
    // pelo o react-hook-form  
    control: Control<any>; // <any>, que pode ser qualquer coisa
    
    // o name, é pra dizer que cada input será único dentro do form
    name: string;

    error?: FieldError; // tipando o meu erro;
}

export function ControlledInput( { control, name, error, ...rest } : Props ){
    return (
        <>

        <Controller
            name={name}
            control={control}


            // aqui o que será renderizado
            // uma propriedade chamada field, para resgatar dele o onChange e value
            render={( { field: { onChange, value } } ) => (
                <Input
                    onChangeText={onChange}
                    value={value}
                    { ...rest }
                />
            )}
        />
        
        { error && 
            <>
            <IconError
                name='error-outline' 
            />
            <Error> {error.message} </Error>
            </>
        }

        </>
    );
}
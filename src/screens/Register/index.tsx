import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import {
    Background,
    Content,
    ViewTitle,
    Form,
    ContentInput,
    Title,
    ViewInput,
    AboutDev
} from './styles';

import imageLogin from '@assets/login.jpg';

import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonIcon } from '@components/ButtonIcon';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';

import { ControlledInput } from '@components/ControlledInput';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '@hooks/auth';

// só posso exportar o que estiver fora da função
// tipando para usar no registro
export type FormData = {
    avatar?: string;
    name: string;
    email: string;
    city: string;
    password: string;
    password_confirm: string;
    area: string;
    about: string;
};

// o yup é um biblioteca para fazer validação baseado em scheme
// schema é uma representação de qual o padrão que seus dados terá que ter 
export const schema = yup.object({
    name: yup.string().required('Informe o seu nome'),
    email: yup.string().email("Email inválido").required('Informe o e-mail'),
    city: yup.string().required('Informe sua cidade'),
    
    // min = minimo 6 digitos
    password: yup.string().min( 6, "No minimo 6 dígitos" )
    .required('Informe a senha'),


    // oneOf para usar a referência de outro input, para comparar
    // pego o campo -> yup.ref('password')
    password_confirm: yup.string().required('Confirmar senha').oneOf([ yup.ref('password'), null ],
    'Senha não confere' ),

    area: yup.string().required('Area de atuação'),
    about: yup.string().required('Escreve sobre você')
});


export function Register(){
    const navigation = useNavigation();
    const { COLORS, FONTS } = useTheme();

    const {signUp, isLogging} = useAuth();

    // <FormData> tipo o useForm tbm, para não dar erros
    // formState: { errors } - assim uso para recuperar os errors
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        // agora digo que o form terá um resolver que irá usar
        // o yupResolver, para resolver o schema criado acima, line 51
        resolver: yupResolver(schema)
    });
    

    function handleUserRegister( data : FormData ){
        signUp(data)
    };

    return (       
        <Background source={imageLogin}
            resizeMode='cover'
            style={{flex: 1,}}
        >
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >

                    <ButtonIcon
                    style={{marginLeft: RFValue(20)}}
                    icon='arrow-back'
                    color={COLORS.RED}
                    onPress={() => navigation.goBack()}
                    />

                    <Content>
                        <Form>

                            <ViewTitle>
                                <Title> Dev
                                    <View style={{width: RFValue(40), height: RFValue(40), 
                                    alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{color: COLORS.RED, fontSize: RFValue(60), 
                                            fontFamily: FONTS.TITLE}}>
                                            C
                                        </Text>
                                    </View>onnect 
                                </Title>
                            </ViewTitle>

                            <ContentInput>
                                <Title> Nome Dev </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        name='name' // nome único que foi tipado
                                        error={errors.name}

                                        size='medium'
                                        style={{paddingRight: RFValue(40)}}
                                        autoCorrect={false}
                                        placeholder='Rick Dev'
                                    />

                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <Title> E-mail </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        error={errors.email}
                                        name='email' // nome único que foi tipado

                                        style={{paddingRight: RFValue(40)}}
                                        size='medium'
                                        autoCorrect={false}
                                        placeholder='dev@dev.com'
                                        keyboardType='email-address'
                                    />

                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <Title> Cidade </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        error={errors.city}
                                        name='city' // nome único que foi tipado

                                        style={{paddingRight: RFValue(40)}}
                                        size='medium'
                                        autoCorrect={false}
                                        placeholder='Niterói - RJ'
                                    />
                                </ViewInput>
                            </ContentInput>

                            <ContentInput>
                                <Title> Senha </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        error={errors.password}
                                        name='password' // nome único que foi tipado

                                        size='medium'
                                        autoCorrect={false}
                                        placeholder='******'
                                        secureTextEntry
                                    />
                                </ViewInput>
                            </ContentInput>


                            <ContentInput>
                                <Title> Repetir Senha </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        error={errors.password_confirm}
                                        name='password_confirm' // nome único que foi tipado

                                        size='medium'
                                        autoCorrect={false}
                                        placeholder='******'
                                        secureTextEntry
                                    />
                                </ViewInput>
                            </ContentInput>
                            
                            <ContentInput>
                                <Title> Atuação </Title>
                                <ViewInput>
                                    
                                    <ControlledInput
                                        control={control} // quem irá controlar esse input (useForm)
                                        error={errors.area}
                                        name='area' // nome único que foi tipado

                                        size='medium'
                                        autoCorrect={false}
                                        placeholder='Mobile Developer'
                                    />
                                </ViewInput>
                            </ContentInput>
                            
                            <ContentInput>
                                <Title> Sobre </Title>
                                <ViewInput>
                                    
                                <ControlledInput
                                    control={control} // quem irá controlar esse input (useForm)
                                    error={errors.about}
                                    name='about' // nome único que foi tipado
                                    
                                    multiline
                                    size='medium'
                                    autoCorrect={false}
                                    placeholder='Nos conte um pouco sobre você'
                                    style={{
                                        minHeight: RFValue(120),
                                        textAlignVertical: 'top',
                                        paddingTop: RFValue(10)
                                    }}
                                />
                                </ViewInput>
                            </ContentInput>


                            <Button
                                style={{
                                    width: '95%', 
                                    alignSelf: 'center',
                                }}

                                title='Cadastrar'
                                
                                // agora chamo o handleSubmit, envolvendo
                                // a função handleUserRegister
                                onPress={ handleSubmit(handleUserRegister) }
                                
                                isLoading={isLogging}
                            />

                        <Text
                        style={{textAlign: 'center', 
                        color: COLORS.BACKGROUND_TRANSPARENT,
                        fontSize: RFValue(15), marginTop: RFValue(30)
                        }}
                        >devricardo@outlook.com</Text>

                        </Form>

                    </Content>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Background>
    );
}
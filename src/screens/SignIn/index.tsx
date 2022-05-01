import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import {
    Container,
    Background,
    InputView,
    ViewIconInput,
    ViewTitle,
    Title,
    IconInput
} from './styles';

import imageLogin from '@assets/login.jpg';
import iconEmail from '@assets/icons/email.png';
import iconPass from '@assets/icons/password.png';

import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';

export function SignIn(){

    const { COLORS, FONTS } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            
            <Container>

                <Background source={imageLogin}
                resizeMode='cover'
                >   

                    <KeyboardAvoidingView
                    behavior = { Platform.OS === 'ios' ? 'padding' : undefined }
                    >   
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
                            
                        <InputView>
                            <Input
                                style={{paddingLeft: 40}} 
                                size="large"
                                keyboardType='email-address'
                                autoCorrect={false}
                                placeholder='E-mail'
                                onChangeText={setEmail}
                            />
                            
                            <ViewIconInput>
                                <IconInput source={iconEmail}/>
                            </ViewIconInput>

                        </InputView>

                        <InputView>
                            <Input
                                style={{paddingLeft: 40}} 
                                size="large"
                                autoCorrect={false}
                                placeholder='Senha de usuário'
                                onChangeText={setPassword}
                            />
                            
                            <ViewIconInput>
                                <IconInput source={iconPass}/>
                            </ViewIconInput>

                        </InputView>

                    </KeyboardAvoidingView>
                </Background>

            </Container>
        
        </TouchableWithoutFeedback>
    );
}
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
    IconInput,
    MenuOptions,
    ViewOptios,
    SubTitle,
    RecoverAccount,
    ContentRecover
} from './styles';

import imageLogin from '@assets/login.jpg';
import iconEmail from '@assets/icons/email.png';
import iconPass from '@assets/icons/password.png';

import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { useNavigation } from '@react-navigation/native';

export function SignIn(){
    const navigation = useNavigation();

    const { COLORS, FONTS } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recoverAccount, setRecoverAccount] = useState(false);

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

                        <Button
                        onPress={() => alert('OK')}
                        title='Entrar'
                        />
                    </KeyboardAvoidingView>
                
                    <MenuOptions>
                        <ViewOptios>
                            <SubTitle>não possuo uma conta</SubTitle>
                            <ButtonIcon 
                                icon='arrow-right-alt' 
                                color={COLORS.RED}
                                onPress={() => navigation.navigate('Register' as never)}
                            />
                        </ViewOptios>

                        <ViewOptios>
                            <SubTitle>esqueci minha senha</SubTitle>
                            <ButtonIcon 
                                icon='mail-outline' 
                                color={COLORS.RED}
                                onPress={() => setRecoverAccount(true) }
                            />
                        </ViewOptios>
                    </MenuOptions>
                </Background>
                
                { recoverAccount && (
                    <RecoverAccount>
                        <ButtonIcon
                            style={{
                                position: 'absolute', top: RFValue(50), left: RFValue(20)
                            }}
                            icon='close'
                            color={COLORS.TEXT}
                            onPress={ () => setRecoverAccount(false) }
                        />
                        <ContentRecover>
                            <Input
                                style={{paddingRight: RFValue(50)}}
                                size='large'
                                placeholder='Digite seu E-mail'
                                keyboardType='email-address'
                                autoCorrect={false}
                            />

                            <View style={{width: RFValue(40), height: RFValue(50), 
                            backgroundColor: COLORS.BACKGROUND,
                            position: 'absolute', right: 0, borderTopRightRadius: RFValue(10),
                            borderBottomRightRadius: RFValue(10)
                            }} />

                            <ButtonIcon
                                style={{
                                    zIndex: 10, position: 'absolute', 
                                    right: 0, alignSelf: 'center'
                                }}
                                icon='send'
                                color={COLORS.TEXT}
                            />
                        </ContentRecover>
                    </RecoverAccount>
                )}
            </Container>
        </TouchableWithoutFeedback>
    );
}
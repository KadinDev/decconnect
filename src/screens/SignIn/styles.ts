import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { MotiText, MotiView } from 'moti'

export const Container = styled.View`
    flex: 1;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 ${RFValue(20)}px;
`;

export const ViewTitle = styled.View`
    height: ${RFValue(50)}px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    line-height: ${RFValue(24)}px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    font-family: ${({theme}) => theme.FONTS.TITLE};
`;

export const InputView = styled.View`
    width: 80%;
    flex-direction: row;
    position: relative;
    margin-bottom: ${RFValue(10)}px;
`;

export const ViewIconInput = styled.View`
    position: absolute;
    left: ${RFValue(5)}px;
    width: ${RFValue(23)}px;
    height: 100%;
    justify-content: center;
`;

export const IconInput = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
    margin-left: ${RFValue(5)}px;
`;

export const MenuOptions = styled.View`
    position: absolute;
    bottom: ${RFValue(5)}px;
    width: 70%;
    align-self: center;
`;

export const ViewOptios = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(10)}px;
`;

export const SubTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    opacity: 0.7;
`;

export const RecoverAccount = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TRANSPARENT};
    align-items: center;
    justify-content: center;
`;

export const ContentRecover = styled.View`
    flex-direction: row;
    width: 80%;
    height: ${RFValue(50)}px;
    position: relative;
`;
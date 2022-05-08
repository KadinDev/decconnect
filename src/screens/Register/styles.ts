import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';


export const Background = styled.ImageBackground`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(0)}px ${RFValue(0)}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(10)
    }    
})`
    width: 100%;
`;

export const Form = styled.View`
    width: 100%;
    padding: 0 ${RFValue(20)}px ${RFValue(100)}px;
`;

export const ViewTitle = styled.View`
    align-items: center;
`;

export const ContentInput = styled.View`
    padding: ${ RFValue(10)}px;
    margin-bottom: ${RFValue(1)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    margin-bottom: ${RFValue(5)}px;
`;

export const ViewInput = styled.View`
    position: relative;
    flex-direction: row;
    align-items: center;
`;

export const AboutDev = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.COLORS.PLACEHOLDER,
}))`
    width: 100%;
    max-height: ${RFValue(150)}px;
    height: ${RFValue(150)}px;
    background-color: ${({theme}) => theme.COLORS.TEXT};
    border-radius: ${RFValue(10)}px;
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    font-size: ${RFValue(16)}px;
    padding: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
`;
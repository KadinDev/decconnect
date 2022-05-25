import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {  getStatusBarHeight ,getBottomSpace } from 'react-native-iphone-x-helper';


import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(0)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(20)}px;
`;

export const Search = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    margin-bottom: ${RFValue(20)}px;
`;

export const ButtonSearch = styled.View`
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    position: absolute;
    right: ${RFValue(0)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    line-height: ${RFValue(22)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
`;

export const ContainerUser = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    margin-bottom: ${RFValue(10)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    border-top-right-radius: ${RFValue(10)}px;
    border-top-left-radius: ${RFValue(10)}px;
    position: relative;
`;

export const InfoUser = styled.View`
    flex-direction: column;
    width: 80%;
    padding-top: ${RFValue(15)}px;
    padding-bottom: ${RFValue(15)}px;
    padding-left: ${RFValue(15)}px;
`;

export const Name = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    font-size: ${RFValue(15)}px;
    text-align: left;
    z-index: 10;
`;

export const About = styled.Text`
    color: ${({theme}) => theme.COLORS.LIME};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    font-size: ${RFValue(14)}px;
    line-height: ${RFValue(16)}px;
    opacity: 0.8;
    z-index: 10;
`;

export const ButtonAvatar = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;
    z-index: 10;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(25)}px;
    border-width: 4px;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND};
    margin-right: ${RFValue(10)}px;
    z-index: 10;
`;

export const Decorator = styled.View`
    position: absolute;
    top: 14%;
    width: 10%;
    height: ${RFValue(3)}px;
    background-color: ${({theme}) => theme.COLORS.YELLOW};
`;

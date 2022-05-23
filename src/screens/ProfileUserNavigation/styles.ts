import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(0)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    align-items: center;
`;

export const ContentUser = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    width: 100%;
`;

export const PhotoUser = styled.Image`
    width: ${RFValue(100)}px;
    height: ${RFValue(100)}px;
    border-radius: ${RFValue(50)}px;
    margin-bottom: ${RFValue(10)}px;
    border-width: 2px;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
`;

export const Name = styled.Text`
    font-size: ${RFValue(22)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    line-height: ${RFValue(25)}px;
`;

export const About = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.LIME};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    margin-bottom: ${RFValue(10)}px;
    opacity: 0.5;
`;

export const DescriptionDev = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    margin-bottom: ${RFValue(20)}px;
    text-align: center;
`;

export const Info = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ViewStatus = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${RFValue(100)}px;
`;

export const QuantityPosts = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-align: center;
`;

export const ViewLevel = styled.View`
    align-items: center;
    height: ${RFValue(140)}px;
`;

export const LevelUser = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    margin-bottom: ${RFValue(10)}px;
`;

export const Likes = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-align: center;
    
`;

export const Friends = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-align: center;
`;

export const ViewPost = styled.View`
    width: 100%;
    margin: ${RFValue(10)}px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TitlePost = styled.Text`
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.TEXT};
    text-align: left;
    width: 90%;
    border-bottom-width: 1px;
    padding-bottom: ${RFValue(5)}px;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
`;


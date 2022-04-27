import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiImage, MotiView, MotiText } from 'moti';

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(0)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const PostUser = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    margin-bottom: ${RFValue(10)}px;
`;

export const ContentPost = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(10)}px;
    margin-bottom: ${RFValue(10)}px;
    width: 100%;
    border-radius: ${RFValue(5)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const AboutPost = styled.View`
    max-width: ${RFValue(250)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
    margin-bottom: ${RFValue(5)}px;
    font-size: ${RFValue(17)}px;
`;

export const Likes = styled.Text`
    color: ${({theme}) => theme.COLORS.LIME};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    padding-left: ${RFValue(20)}px;
`;

export const OwnerPost = styled.View``;

export const Avatar = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    border-radius: ${RFValue(20)}px;
    border-width: 4px;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Level = styled(MotiImage)`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    border-radius: ${RFValue(15)}px;
    align-self: center;
`;

export const ViewPost = styled.View`
    padding: 0 ${RFValue(5)}px;
    border-color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    border-top-width: 1px;
`;

export const Post = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    text-align: left;
    font-size: ${RFValue(15)}px;
`;

export const DeleteAnimation = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

export const ContentDeleteAnimation = styled.View`
    background-color: #111;
    width: 80%;
    border-radius: ${RFValue(4)}px;
    height: ${RFValue(60)}px;
    align-items: center;
    justify-content: center;
`;

export const TextDeleteAnimation = styled(MotiText)`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.FONTS.TITLE};
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const BorderDeleteAnimation = styled(MotiView)`
    height: 1px;
    background-color: ${({theme}) => theme.COLORS.RED};
    position: absolute;
    bottom: 0;
`;
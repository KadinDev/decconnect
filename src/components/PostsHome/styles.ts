import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiView, MotiImage } from 'moti';

export const Container = styled(MotiView)`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    margin-bottom: ${RFValue(20)}px;
    padding: ${RFValue(10)}px;
    height: ${RFValue(240)}px;
`;

export const UserContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const UserContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonAvatar = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    border: solid ${RFValue(4)}px ${({theme}) => theme.COLORS.BACKGROUND};
    border-radius: ${RFValue(30)}px;
    padding: ${RFValue(2)}px;
    margin-right: ${RFValue(5)}px;
`;

export const Avatar = styled.Image.attrs({
    resizeMode: 'cover',
})`
    width: 100%;
    height: 100%;
    border-radius: ${RFValue(30)}px;
`;

export const InfoAvatar = styled.View`

`;

export const NameAvatar = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE_SECONDARY};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700 };
`;

export const AboutAvatar = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700 };
`;

export const AvatarLevel = styled(MotiImage)`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;

export const Separator = styled.View`
    width: 100%;
    height: ${RFValue(2)}px;
    background-color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
    margin: ${RFValue(10)}px 0;
`;

export const TitlePost = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700 };
    margin-bottom: ${RFValue(5)}px;
`;

export const ContentPost = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.FONTS.TEXT};
`;

export const Likes = styled.Text`
    color: ${({theme}) => theme.COLORS.LIME};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    letter-spacing: 1px;
    margin-left: ${RFValue(10)}px;
`;

export const ContentButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    position: relative;
    margin-top: ${RFValue(15)}px;
    justify-content: space-between;
    padding: ${RFValue(5)}px ${RFValue(10)}px; 
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const ViewLikes = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})`

`;

export const ViewOpenModal = styled.View`
    position: absolute;
    left: 50%;
`;
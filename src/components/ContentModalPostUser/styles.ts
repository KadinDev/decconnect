import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';


import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(10)}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + 100,
        paddingTop: 10,
    }
})`
    width: 100%;
    flex: 1;
`;

export const HeaderUser = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const InfoUser = styled.View`
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

export const AvatarLevel = styled.Image`
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
    margin-bottom: ${RFValue(15)}px;
    text-align: center;
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
import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiView } from 'moti';
import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(0)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(50)
    }    
})`
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(5)}px;
`;

export const ViewImage = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const InputTitle = styled.TextInput.attrs({
    placeholderTextColor: theme.COLORS.TEXT_OPACITY,
})`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(18)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    height: ${RFValue(50)}px;
    margin-bottom: ${RFValue(10)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
`;

export const InputContent = styled.TextInput.attrs({
    placeholderTextColor: theme.COLORS.TEXT_OPACITY,
})`
    color: ${({theme}) => theme.COLORS.TEXT};
    font-size: ${RFValue(16)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(10)}px;
    border-radius: ${RFValue(5)}px;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    height: ${RFValue(300)}px;
`;

export const Photo = styled.View`
    position: absolute;
    bottom: ${RFValue(4)}px;
    left: ${RFValue(30)}px;
`;

export const Send = styled.View`
    position: absolute;
    bottom: ${RFValue(4)}px;
    right: ${RFValue(30)}px;
`;
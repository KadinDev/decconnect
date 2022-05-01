import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Background = styled.ImageBackground`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(20)}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace() + RFValue(20)
    }    
})`
    width: 100%;
    padding: 0 ${RFValue(32)}px;
`;

export const Title = styled.Text``;

export const SubTitle = styled.Text``;
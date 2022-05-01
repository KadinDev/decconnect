import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

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
    justify-content: flex-start;
`;

export const Title = styled.Text`
    font-size: ${RFValue(22)}px;
    line-height: ${RFValue(24)}px;
    color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    font-family: ${({theme}) => theme.FONTS.TITLE};
`;

export const InputView = styled.View`
    width: 80%;
    height: ${RFValue(50)}px;
    flex-direction: row;
    position: relative;
    margin-bottom: ${RFValue(10)}px;
`;

export const ViewIconInput = styled.View`
    position: absolute;
    left: ${RFValue(5)}px;
    width: ${RFValue(40)}px;
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

export const SubTitle = styled.Text``;
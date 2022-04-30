import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    padding: ${RFValue(20)}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    line-height: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_700};
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
    background-color: ${({theme}) => theme.COLORS.RED};
    position: absolute;
    right: ${RFValue(0)}px;
    border-top-right-radius: ${RFValue(10)}px;
    border-bottom-right-radius: ${RFValue(10)}px;
`;

export const ViewPost = styled.View`
    width: 100%;
    margin: ${RFValue(10)}px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.COLORS.TEXT_OPACITY};
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
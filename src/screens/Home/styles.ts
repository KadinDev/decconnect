import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(0)}px ${RFValue(20)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    flex-direction: row;
    align-items: center;
    padding-left: ${RFValue(10)}px;
    padding-right: ${RFValue(10)}px;
`;

export const ButtonSearch = styled.View`
    height: ${RFValue(50)}px;
    width: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    position: absolute;
    right: ${RFValue(10)}px;
    border-bottom-left-radius: ${RFValue(25)}px;
    border-top-left-radius: ${RFValue(25)}px;
`;

import styled, { css } from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
    type: TypeProps;
};

export const Container = styled(RectButton)<ContainerProps>`
    flex: 1;
    max-height: ${RFValue(50)}px;
    min-height: ${RFValue(50)}px;
    align-items: center;
    justify-content: center;

    background-color: ${({theme, type}) => 
    type === 'primary' ? theme.COLORS.RED : theme.COLORS.BACKGROUND };

    border-radius: ${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    text-transform: uppercase;

    ${({theme}) => css`
        font-family: ${theme.FONTS.ROBOTO_500};
        color: ${theme.COLORS.TEXT};
    `};
`;

export const Load = styled.ActivityIndicator.attrs( ({ theme }) => ({
    color: theme.COLORS.TEXT
}))``;
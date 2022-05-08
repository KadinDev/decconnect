import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

// posso criar vários tipos de Inputs
export type TypeProps = 'small' | 'medium' | 'large';

type Props = {
    size: TypeProps;
    isFocused: boolean;
};

export const Container = styled(TextInput).attrs<Props>(({theme}) => ({
    placeholderTextColor: theme.COLORS.PLACEHOLDER,
}))<Props>`
    max-height: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    background-color: ${({theme}) => theme.COLORS.TEXT};
    border-radius: ${RFValue(5)}px;
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
    font-size: ${RFValue(16)}px;
    padding: 0 ${RFValue(10)}px;

    ${({size}) => size === 'small' && css`
        width: ${RFValue(60)}px;
        height: ${RFValue(50)}px;
        text-align: center;
    ` };

    ${({size}) => size === 'medium' && css`
        flex: 1;
        padding-right: ${RFValue(60)}px;
    `};

    ${({size}) => size === 'large' && css`
        width: 100%;
    `};

    ${({ isFocused }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${({theme}) => theme.COLORS.RED};
    `};
`;
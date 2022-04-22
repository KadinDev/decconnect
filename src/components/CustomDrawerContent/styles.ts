import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export type TypeProps = 'primary' | 'secondary';

type IconProps = {
    type: TypeProps;
};

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_MENU};
    align-items: center;
    justify-content: space-evenly;
    border-right-width: 2px;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const ButtonIconDrawer = styled(RectButton)<IconProps>`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
    background-color: ${({ theme, type }) => type === 'primary' ? 
    theme.COLORS.RED : theme.COLORS.BACKGROUND };

    ${({ type }) => type === 'primary' && css `
        border-radius: ${RFValue(10)}px;
    `};

    ${({ theme, type }) => type === 'secondary' && css `
        border-radius: ${RFValue(20)}px;
    `};
`;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
`;

export const IconMessages = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.COLORS.TEXT};
`;

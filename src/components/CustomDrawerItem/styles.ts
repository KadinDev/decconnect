import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export type ActiveButtonProps = {
    selected: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    flex-direction: row;
    height: ${RFValue(100)}px;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-right: 0px;
`;

export const Border = styled.View`
    position: absolute;
    height: 100%;
    left: 5px;
    width: ${RFValue(2)}px;
    background-color: ${({theme}) => theme.COLORS.RED};
`;

export const Title = styled.Text<ActiveButtonProps>`
    font-size: ${RFValue(17)}px;
    text-transform: uppercase;
    transform: rotate(-90deg);
    position: absolute;

    ${ ({ theme, selected }) => css`
        color: ${ selected ? theme.COLORS.TEXT : theme.COLORS.TEXT_OPACITY };
    `}
`;
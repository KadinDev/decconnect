import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const IconError = styled(MaterialIcons)`
    position: absolute;
    right: 0;
    font-size: ${RFValue(25)}px;
    margin-right: ${RFValue(10)}px;
    color: ${({theme}) => theme.COLORS.RED};
`;

export const Error = styled.Text`
    color: ${({theme}) => theme.COLORS.RED};
    font-size: ${RFValue(16)}px;
    line-height: ${RFValue(18)}px;
    position: absolute;
    top: ${RFValue(-25)}px;
    right: 0;
    font-family: ${({theme}) => theme.FONTS.ROBOTO_500};
`;

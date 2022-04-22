import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;

export const Load = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.COLORS.TEXT
}))``;
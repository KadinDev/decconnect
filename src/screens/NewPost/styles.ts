import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { MotiView } from 'moti';

export const Container = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 }px ${RFValue(20)}px ${RFValue(0)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
`;
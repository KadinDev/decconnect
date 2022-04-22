import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Load,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

type Props = TouchableOpacityProps & {
    icon: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
    isLoading?: boolean;
};

export function ButtonIcon( {
    icon, 
    color, 
    isLoading, 
    ...rest
} : Props ){

    return (
        <Container  
            activeOpacity={0.8}
            {...rest}
        >   
            { 
            isLoading ? 

                <Load/> 
                : 
                <MaterialIcons 
                name={icon}
                color={color}
                size={RFValue(24)} 
                />
            
            }

        </Container>
    );
}
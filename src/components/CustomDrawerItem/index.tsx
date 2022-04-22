import React from 'react';

import {
    Container,
    Border,
    Title,
    ActiveButtonProps, // para ativar ou destivar quando o clique houver no botão
} from './styles';

type DrawerItemProps = ActiveButtonProps & {
    label: string,
    onPress: () => void,
};

export function CustomDrawerItem({label, selected, onPress} : DrawerItemProps){
    
    return (
        <Container
            onPress={onPress}
        >   
            { selected && <Border/> }

            <Title selected={selected} > {label} </Title>
        </Container>
    );

}
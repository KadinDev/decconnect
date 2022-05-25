import React from 'react';

import {
    Container
} from './styles';

import { QuantityConnectionsUser } from '@components/QuantityConnectionsUser';

export function Connections(){
    return (
        <Container>
            <QuantityConnectionsUser/>
        </Container>
    );
}
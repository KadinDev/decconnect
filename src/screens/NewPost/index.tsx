import React, { useState, useEffect, useContext } from 'react';
import { Modal, Text } from 'react-native';

import {
    Container
} from './styles';


import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useAuth } from '@hooks/auth';

export function NewPost(){

    const {user} = useAuth();
    const [photo, setPhoto] = useState('');

   

    return (
        <Container>

            <Text style={{color: 'white', fontSize: 18}}> Novo Post </Text>

        </Container>
    );
}
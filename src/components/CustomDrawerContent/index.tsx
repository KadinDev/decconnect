import React, { useState } from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import {Alert} from 'react-native';

import {
    Container,
    ButtonIconDrawer,
    Icon,
    TypeProps,
    IconMessages
} from './styles';

import { NAVIGATION_ROUTES } from '@utils/navigationMenu';
import { CustomDrawerItem } from '@components/CustomDrawerItem';
import { useNavigation } from '@react-navigation/native';

import { RectButtonProps } from 'react-native-gesture-handler';

type ItemProps = {
    id: string;
    name: string
};

type Props = RectButtonProps & {
    type: TypeProps;
};


export function CustomDrawerContent( {type, ...rest} : Props ){

    const navigation = useNavigation();
    const [selected, setSelected] = useState('1')

    function handleButtonNavigation(item : ItemProps){
        setSelected(item.id);
        navigation.navigate(item.name as never);
    };

    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex: 1}}
        >
            
            <Container>
                <ButtonIconDrawer
                    type="secondary"
                    onPress={ () => Alert.alert('Em Breve', 'Estamos trabalhando nisso!')}
                    {...rest}
                >
                    <IconMessages name="forum" />
                </ButtonIconDrawer>

                {
                    NAVIGATION_ROUTES.map(item => (
                        <CustomDrawerItem
                            key={item.id}
                            label={item.name}
                            onPress={ () => handleButtonNavigation(item) }

                            /* selected agora vai ser true pois no onPress
                            estou passando algo para ele */
                            selected={selected === item.id}
                        />
                    ))
                }

                <ButtonIconDrawer
                    type="primary"
                    onPress={ () => alert('sair do app')}
                    {...rest}
                >
                    <Icon name="logout" />
                </ButtonIconDrawer>

            </Container>

        </DrawerContentScrollView>
    );
}
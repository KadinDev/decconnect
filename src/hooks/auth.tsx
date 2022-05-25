import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';

import { Alert } from 'react-native';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const imageNewProfile = 'https://p.kindpng.com/picc/s/24-248253_user-profile-default-image-png-clipart-png-download.png';

type User = {
    id: string;
    name: string;
};


// tipando corretamente para não dar erro no form,
// já que estou usando o useForm com tratamento de erro
type signUpData = {
    about: string,
    area: string;
    city: string,
    email: string,
    password: string,
    name: string,
    avatar: string,
};

type AuthContextData = {
    signIn: ( email: string, password: string ) => Promise<void>;
    signUp: ( data: signUpData ) => Promise<void>;
    signOut: () => Promise<void>;
    forgotPassword: ( email: string ) => Promise<void>;
    isLogging: boolean;
    user: User | null;
};

type AuthProviderProps = {
    children: ReactNode;
};

const DEV_COLLECTION = "@dev:users";

export const AuthContext = createContext( {} as AuthContextData );

function AuthProvider( {children} : AuthProviderProps ){
    const [isLogging, setIsLogging] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        loadStorageUser();
    },[]);


    async function signIn(email: string, password: string){
        if(!email || !password) {
            return Alert.alert('Login', 'Informe o e-mail e a senha');
        };

        setIsLogging(true);

        auth()
        .signInWithEmailAndPassword(email, password)
        .then((account) => {
            firestore()
            .collection('developers')
            .doc(account.user.uid)
            .get()
            .then(  async (developer)  => {
                const { name } = developer.data() as User;

                if(developer.exists){
                    const userData = {
                        id: account.user.uid,
                        name,
                    };
                    setUser(userData);
                    await AsyncStorage.setItem(DEV_COLLECTION, JSON.stringify(userData));
                };

            })
            .catch(() => Alert.alert(
                'Login', 'Não foi possível buscar os dados de perfil do usuário.'
            ))
        })
        .catch(error => {
            const {code} = error;

            if(code === 'auth/user-not-found' || code === 'auth/wrong-password') {
                return Alert.alert('Login', 'E-mail e/ou senha inválida.')
            }
            else {
                return Alert.alert('Login', 'Não foi possível realizar o login.')
            }

        })
        .finally(() => setIsLogging(false));
    };

    async function signUp({
        about,
        area,
        city,
        email,
        password,
        name,
        avatar = imageNewProfile // avatar recebe o imageNewProfile
    } : signUpData ){

        setIsLogging(true);

        auth().createUserWithEmailAndPassword(email, password)
        .then( async (account) => {
            firestore()
            .collection('developers')
            .doc(account.user.uid)
            .set({
                about,
                area,
                city,
                name,
                email,
                createdUser: firestore.FieldValue.serverTimestamp(),
                level: 0,
                avatar: imageNewProfile,
            })
            .then( async () => {
                const userData = {
                    id: account.user.uid,
                    name,
                    email,
                };
                setUser(userData);
                await AsyncStorage.setItem(DEV_COLLECTION, JSON.stringify(userData));
                setIsLogging(false);
            })
        })
        .catch( () => Alert.alert(
            'Registro', 'Não foi possível fazer seu registro, verifique se preencheu tudo corretamente.'
        ))
    };

    async function loadStorageUser(){
        setIsLogging(true);
        const user = await AsyncStorage.getItem(DEV_COLLECTION);
        if(user){
            const userData = JSON.parse(user) as User;
            setUser(userData);
        };
        setIsLogging(false);
    };

    async function signOut(){
        await auth().signOut();
        await AsyncStorage.removeItem(DEV_COLLECTION);
        setUser(null);
    };

    async function forgotPassword(recoverEmail: string){
        if(!recoverEmail){
            return Alert.alert('Redefinir senha', 'Informe o e-mail.');
        };

        auth()
        .sendPasswordResetEmail(recoverEmail)
        .then( () => Alert.alert(`Enviamos um e-mail para ${recoverEmail}`) )
        .catch( () => Alert.alert('Redefinir Senha', 'Não foi possível o envio de e-mail.'))
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
                signUp,
                forgotPassword,
                isLogging
            }}
        >
            { children }
        </AuthContext.Provider>
    );
};

function useAuth(){
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth };

// para funcionar lembrar de passar para as rotas no App.tsx
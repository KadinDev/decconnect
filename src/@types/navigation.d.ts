
export type UserProfileNavigationProps = {
    id?: string;
};

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Favorites: undefined;
            Profile: undefined;
            NewPost: undefined;
            Connections: undefined;
            ProfileUserNavigation: UserProfileNavigationProps;
        }
    }
}
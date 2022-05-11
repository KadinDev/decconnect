
export type UserProfileNavigationProps = {
    id?: string;
};

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            favorites: undefined;
            profile: undefined;
        }
    }
}
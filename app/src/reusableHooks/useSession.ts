import React, {useContext} from "react";

export const UserContext = React.createContext<any>({
    user:null
});
export const useSession = () => {
    const { user } = useContext(UserContext);
    return user
};

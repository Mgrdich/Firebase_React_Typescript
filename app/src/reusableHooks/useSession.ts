import  {useContext} from "react";
import {UserContext} from "../AppAuth";

export const useSession = () => {
    const {user,initializing} = useContext(UserContext);
    return {user,initializing};
};

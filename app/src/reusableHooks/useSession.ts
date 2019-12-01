import  {useContext} from "react";
import {UserContext} from "../AppAuth";

export const useSession = () => {
    const {user} = useContext(UserContext);
    return {user: user};
};

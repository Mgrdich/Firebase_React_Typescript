import  {useState, useEffect} from "react";
import {auth} from "firebase";


export const useAuth = () => {
    const [myAuth, changeAuth] = useState(() => {
        const user = auth().currentUser;
        return {initializing: !user, user}
    });

    function onChange(user: any) {
        changeAuth({initializing: false, user})
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = auth().onAuthStateChanged(onChange);
        // unsubscribe to the listener when unmounting
        return () => unsubscribe()
    }, [auth]);

    return myAuth;
};

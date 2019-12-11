import  {useState, useEffect} from "react";
import {auth} from "firebase";


export const useAuth = () => {  //skipping one iter
    const [myAuth, changeAuth] = useState(() => {
        const user = auth().currentUser;
        return {initializing: !user, user}
    });

    //Todo : figure out initalizing or remove it to the local call
    function onChange(user:any) {
        changeAuth({initializing: false, user:user})
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = auth().onAuthStateChanged(onChange);
        // unsubscribe to the listener when unmounting
        return () => unsubscribe();
    }, []);

    return myAuth;
};

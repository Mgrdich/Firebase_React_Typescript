import  {useState, useEffect} from "react";
import firebase from "firebase";


export const useAuth = () => {
    const [myAuth, changeAuth] = useState(() => {
        const user = firebase.auth().currentUser;
        return {initializing: !user, user}
    });

    function onChange(user: any) {
        changeAuth({initializing: false, user})
    }

    useEffect(() => {
        // listen for auth state changes
        const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
        // unsubscribe to the listener when unmounting
        return () => unsubscribe()
    }, []);

    return myAuth;
};

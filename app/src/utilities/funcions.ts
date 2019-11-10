export const firebaseLooper = (snapshot: any): Array<any> => {
    return Object.keys(snapshot).reduce((acc: any, curr: string): any => {
        let obj = {...snapshot[curr], id: curr}; //to get rid of the Reference
        acc.push(obj);
        return acc;
    }, []);
};

export function deepCopyClone(objectToClone: Array<any> | Object) {
    return JSON.parse(JSON.stringify(objectToClone));
}

export function isEmpty(object:any):boolean {
    for(let key in object) {
        // checking key exist
        if(object.hasOwnProperty(key))
            return false; // if key exist
    }
    return true; // if no key exist

}
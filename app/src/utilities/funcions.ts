export function firebaseLooper(snapshot: any): Array<any> {
    return snapshot.map((childSnapshot: any) => {
        return {
            ...childSnapshot.val(),
            id: childSnapshot.key
        }
    });
}
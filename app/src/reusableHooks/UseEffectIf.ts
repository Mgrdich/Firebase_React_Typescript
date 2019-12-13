import {useEffect} from "react";

export function useEffectIf(callback: Function, condition: boolean, dependency: Array<any>) {
    //TODO:make the callback cacheable
    useEffect(() => {
        condition && callback();
    }, [...dependency,condition]);
}
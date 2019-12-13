import {emailValidate, passwordValidation} from "./validation";

export function signinValidation(values: any) {
    if (arguments.length > 0) {
        const errorUser = emailValidate(values);
        const errorPass = passwordValidation(values);
        
        return {...errorUser,...errorPass};
    }
    return true;
}
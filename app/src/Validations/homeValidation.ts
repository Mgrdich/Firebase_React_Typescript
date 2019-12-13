import {emailValidate} from "./validation";

export function homeValidation(values: any) {
    if (arguments.length > 0) {
       return  emailValidate(values);
    }
    return true;
}
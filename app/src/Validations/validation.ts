import {email, password} from "../utilities/Objects";


export function emailValidate(values: any) {  //TODO:make it more pure
    let errors: any = {};
    if (!values[email.config.name]) {
        errors[email.config.name] = 'Email address is required';
    } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(values[email.config.name])) {
        errors[email.config.name] = 'Email address is invalid';
    }
    return errors;
}

export function passwordValidation(values: any) {
    let errors: any = {};

    if (!values[password.config.name]) {
        errors[password.config.name] = 'password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(values[password.config.name])) {
        errors[password.config.name] = 'password is invalid';
    }
    return errors;

}
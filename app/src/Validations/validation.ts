import {email,password} from "../utilities/Objects";


export  function emailValidate(values: any) {
    let errors: any = {};
    if (arguments.length > 0) {
        if (!values[email.config.name]) {
            errors[email.config.name] = 'Email address is required';
        } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(values[email.config.name])) {
            errors[email.config.name] = 'Email address is invalid';
        }
        return errors;
    }
    return true;

};

export function passwordValidation(values:any) {
    let errors: any = {};
    if (arguments.length > 0) {
        if (!values[password.config.name]) {
            errors[password.config.name] = 'password is required';
        } else if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values[password.config.name])) {
            errors[password.config.name] = 'password is invalid';
        }
        return errors;
    }
    return true;

}
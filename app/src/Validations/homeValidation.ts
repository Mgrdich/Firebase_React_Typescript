import {email, password} from "../utilities/Objects";

export function homeValidation(values: any) {
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
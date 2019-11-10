const input1 = "email_input";

export default function validate(values: any) {
    let errors: any = {};
    if (arguments.length > 0) {
        if (!values[input1]) {
            errors[input1] = 'Email address is required';
        } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(values[input1])) {
            errors[input1] = 'Email address is invalid';
        }
        return errors;
    }
    return true;

};
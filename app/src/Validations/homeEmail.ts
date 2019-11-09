export default function validate(values: any) {
    let errors: any = {};
    if (arguments.length > 0) {
        if (!values.email) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }
        return errors;
    }
    return true;

};
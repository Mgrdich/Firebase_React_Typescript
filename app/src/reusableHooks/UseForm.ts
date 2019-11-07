import {BaseSyntheticEvent, FormEvent, useEffect, useState} from "react";

export function useForm(callback?: any, validate?: any) {

    const [values, setValues] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event: FormEvent) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        if (validate()) {
            setErrors(validate(values));
        }
    };

    const handleChange = (event: BaseSyntheticEvent) => {
        event.persist();
        setValues((values: any) => {
            return ({...values, [event.target.name]: event.target.value});
        });
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
}

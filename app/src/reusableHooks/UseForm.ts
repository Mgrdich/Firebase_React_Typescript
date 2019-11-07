import {BaseSyntheticEvent, useEffect, useState} from "react";

export function useForm(callback?: any, validate?:any) {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event: Event) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    };

    const handleChange = (event: BaseSyntheticEvent) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
}

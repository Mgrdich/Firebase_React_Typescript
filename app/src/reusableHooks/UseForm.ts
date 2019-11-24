import {BaseSyntheticEvent, FormEvent, useState} from "react";
import {isEmpty} from "../utilities/funcions";

export function useForm(validate?: Function) {

    const [values, setValues] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [validForm, changeFormValidity] = useState<boolean>(false);
    /* useEffect(() => {
         if (Object.keys(errors).length === 0 && isSubmitting) {
             // callback() && callback();
         }
     }, [errors,isSubmitting]);*/

    const handleSubmit = (event: FormEvent, changeSubmit?: boolean) => {
        if (changeSubmit) {
            setIsSubmitting(false);
            return;
        }
        if (event) {
            event.preventDefault();
            setIsSubmitting(true);
        }

        if (validate && validate()) {
            setErrors(validate(values)); //always specific for all the form and the validation is written for all the form
            changeFormValidity(isEmpty(errors));
            return;
        }
        changeFormValidity(isEmpty(errors));

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
        errors,
        submitted: isSubmitting,
        validForm
    };
}

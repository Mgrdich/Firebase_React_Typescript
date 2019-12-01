import {BaseSyntheticEvent, FormEvent, useCallback, useState} from "react";
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

    const handleSubmit = (event: FormEvent): void => {
        if (event) {
            event.preventDefault();
            setIsSubmitting(true);
        }

        if (validate && validate()) {
            const errors:any = validate(values);
            setErrors(errors); //always specific for all the form and the validation is written for all the form
            //errors is working ehh
            const validatedFields = isEmpty(errors);
            changeFormValidity(validatedFields);
            return;
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
        errors,
        submitted: isSubmitting,
        validForm
    };
}

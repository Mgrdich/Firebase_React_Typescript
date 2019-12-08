import React, {BaseSyntheticEvent, useCallback, useEffect, useState} from 'react';
import FormFields from "../../UI/FormFields";
import {useForm} from "../../../reusableHooks/UseForm";
import {homeValidation} from "../../../Validations/homeValidation";
import {email} from "../../../utilities/Objects";
import {firebasePromotion} from "../../../Firebase";

const Fade = require("react-reveal/Fade");

const Enroll = () => {

    let input1Name: string = email.config.name;
    const {handleChange, handleSubmit, values, errors, submitted, validForm} = useForm(homeValidation);
    const [emailInDatabase, changeEmailInDatabase] = useState<boolean|null>(null);

    useEffect(() => { //since it is always checking
        if (validForm) {
            firebasePromotion.orderByChild('email').equalTo(values[input1Name]).once("value")
                .then((snapshot: any) => {
                    if (snapshot.val() === null) { //not found in the data base
                        resetSuccess(true);
                        firebasePromotion.push(values).then(() => {
                        });
                        return;
                    }
                    resetSuccess(false);
                });
        }
    });

    const resetSuccess = useCallback((emailChecking: boolean) => {
        changeEmailInDatabase(emailChecking);
    }, [emailInDatabase]);

    const errorMessageJSX = useCallback(() => {
        let labelText:string= '';
        if(emailInDatabase){ //TODO make this a function pure fo if true else fasle
            labelText = "Congrats";
        } else if(emailInDatabase===false) {
            labelText = "Already in Database"
        }
        const labelError: JSX.Element = <label
            className={(emailInDatabase)?'success_label':'error_label'}>{labelText}</label>;
        if (emailInDatabase) {
            return <Fade>{labelError}</Fade>;
        }
        return labelError;
    }, [emailInDatabase]);

    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event) => handleSubmit(event)} action="" noValidate={true}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="flexBox email">
                        <div className="enroll_input input_field_validation">
                            <FormFields
                                formDataConfig={email}
                                change={(e: BaseSyntheticEvent) => handleChange(e)}
                                value={(values.hasOwnProperty(input1Name)) ? values[input1Name] : ''}
                                error={errors[input1Name]}
                                submitted={submitted}
                            />
                            {submitted && !errors[input1Name] && errorMessageJSX()}
                        </div>
                        <button type="submit">Enroll</button>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
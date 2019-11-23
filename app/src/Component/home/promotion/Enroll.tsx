import React, {BaseSyntheticEvent, FormEvent, useCallback, useState} from 'react';
import FormFields from "../../UI/FormFields";
import {useForm} from "../../../reusableHooks/UseForm";
import validate from "../../../Validations/homeEmail";
import {isEmpty} from "../../../utilities/funcions";
import {email} from "../../../utilities/Objects";
import {firebasePromotion} from "../../../Firebase";

const Fade = require("react-reveal/Fade");

const Enroll = () => {

    let input1Name: string = email.config.name;
    const {handleChange, handleSubmit, values, errors, submitted} = useForm(validate);
    const [emailInDatabase, changeEmailInDatabase] = useState<boolean>(false);

    const Submitted = function (event: FormEvent, errors: any) {
        handleSubmit(event);
        if (isEmpty(errors)) {
            // values[input1Name] = '';
            firebasePromotion.orderByChild('email').equalTo(values[input1Name]).once("value")
                .then((snapshot: any) => {
                    if (snapshot.val() === null) { //not found in the data base
                        resetSuccess(event, true);
                        firebasePromotion.push(values).then(() =>{ } );
                        return;
                    }
                    resetSuccess(event, false);

                })
        }
    };

    const resetSuccess = useCallback((event: FormEvent, emailChecking: boolean) => {
        changeEmailInDatabase(emailChecking);
        setTimeout(() => {
            handleSubmit(event, true);
        }, 2000);

    },[emailInDatabase]);


    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event) => Submitted(event, errors)} action="" noValidate={true}>
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
                            {submitted && !errors[input1Name] &&
                            <label
                                className="success_label">{(emailInDatabase) ? "Congrats" : "Already in Database"}</label>}
                        </div>
                        <button type="submit">Enroll</button>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
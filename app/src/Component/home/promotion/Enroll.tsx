import React, {FormEvent, useState} from 'react';
import FormFields from "../../UI/FormFields";
import {deepCopyClone} from "../../../utilities/funcions";
import {useForm} from "../../../reusableHooks/UseForm";

const Fade = require("react-reveal/Fade");

type elementType = {
    event:Event;
    id:string;
}
const Enroll = () => {
    function submitForm(event: FormEvent) {

    }

    let objInput = {
        element:"input",
        value:"",
        config:{
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter you email'
        }
    };
    const { handleChange, handleSubmit, values, errors } = useForm();

    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event => submitForm(event))} action="">
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">
                        <FormFields
                            formDataConfig={objInput}
                            id="promotion"
                            change={handleChange}
                        />
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
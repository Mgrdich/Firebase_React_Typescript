import React, {BaseSyntheticEvent} from 'react';
import FormFields from "../../UI/FormFields";
import {useForm} from "../../../reusableHooks/UseForm";
import {IInputInfo} from "../../../Interfaces";
import validate from "../../../Validations/homeEmail";

const Fade = require("react-reveal/Fade");

const Enroll = () => {

    let objInput: IInputInfo = {
        element: "input",
        config: {
            name: 'email_input',
            type: 'email',
            placeholder: 'Enter you email'
        }
    };
    let input1Name: string = objInput.config.name;
    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    console.log(errors);
    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event) => handleSubmit(event)} action="" noValidate={true}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">
                        <FormFields
                            formDataConfig={objInput}
                            id="promotion"
                            change={(e: BaseSyntheticEvent) => handleChange(e)}
                            value={(values.hasOwnProperty(input1Name)) ? values[input1Name] : ''}
                        />
                        {errors[input1Name] && <label htmlFor="promotion">{errors[input1Name]}</label>}
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
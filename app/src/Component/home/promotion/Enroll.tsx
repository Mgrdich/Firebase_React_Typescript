import React, {BaseSyntheticEvent, FormEvent} from 'react';
import FormFields from "../../UI/FormFields";
import {useForm} from "../../../reusableHooks/UseForm";
import {IInputInfo} from "../../../Interfaces";
import validate from "../../../Validations/homeEmail";
import {isEmpty} from "../../../utilities/funcions";

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
    const {handleChange, handleSubmit, values, errors, submitted} = useForm(validate);

    function Submitted(event: FormEvent) {
        handleSubmit(event);
        console.log(submitted,isEmpty(errors),errors);
        if (isEmpty(errors)) {
            values[input1Name] = '';
        }
    }

    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event) => Submitted(event)} action="" noValidate={true}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="flexBox email">
                        <div className="enroll_input input_field_validation">
                            <FormFields
                                formDataConfig={objInput}
                                id="promotion"
                                change={(e: BaseSyntheticEvent) => handleChange(e)}
                                value={(values.hasOwnProperty(input1Name)) ? values[input1Name] : ''}
                            />
                            {errors[input1Name] &&
                            <label htmlFor="promotion" className="error_label">{errors[input1Name]}</label>}
                            {submitted && !errors[input1Name] &&
                            <label className="success_label">Congratulations</label>}
                        </div>
                        <button type="submit">Enroll</button>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
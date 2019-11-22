import React, {BaseSyntheticEvent, FormEvent, useCallback} from 'react';
import FormFields from "../../UI/FormFields";
import {useForm} from "../../../reusableHooks/UseForm";
import validate from "../../../Validations/homeEmail";
import {isEmpty} from "../../../utilities/funcions";
import {email} from "../../../utilities/Objects";

const Fade = require("react-reveal/Fade");

const Enroll = () => {

    let input1Name: string = email.config.name;
    const {handleChange, handleSubmit, values, errors, submitted} = useForm(validate);

    const Submitted = function(event: FormEvent,errors:any) {
        handleSubmit(event);
        if (isEmpty(errors)) {
            values[input1Name] = '';
        }
    };

    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event) => Submitted(event,errors)} action="" noValidate={true}>
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
                        </div>
                        <button type="submit">Enroll</button>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
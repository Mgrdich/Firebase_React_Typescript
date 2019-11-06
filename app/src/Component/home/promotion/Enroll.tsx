import React, {FormEvent, useState} from 'react';
import FormFields from "../../UI/FormFields";
import {deepCopyClone} from "../../../utilities/funcions";

const Fade = require("react-reveal/Fade");

type elementType = {
    event:Event;
    id:string;
}
const Enroll = () => {
    const [formMsg, ChangeFormMsg] = useState({
        formError: false,
        formSuccess: '',
    });
    const [formData, ChangeFormData] = useState({
        email: {
            element: 'input',
            value: '',
            config: {
                name: 'email_input',
                type: 'email',
                placeholder: 'Enter you email'
            },
            validation: {
                required: true,
                email: true
            },
            valid: false,
            validationMessage: ''
        }
    });

    function submitForm(event: FormEvent) {

    }

    function updateForm(element:elementType) {
        // const newFormData = {...formData};
        //not effective in this case but for future is important
        const newFormData = deepCopyClone(formData);
        const newElement = {...newFormData[element.id]};

        // @ts-ignore //check it later
        newElement.value = element.event.target.value;

        newFormData[element.id] = newElement;
        console.log(newFormData);
        ChangeFormData(newFormData);
    }
    return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event => submitForm(event))} action="">
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">
                        <FormFields
                            formData={formData.email}
                            id="promotion"
                            change={(element:elementType)=>updateForm(element)}
                        />
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
import React, {FormEvent, useState} from 'react';
import FormFields from "../../UI/FormFields";

const Fade = require("react-reveal/Fade");

const Enroll = () => {
    const [formMsg,ChangeFormMsg] = useState({
       formError:false,
       formSuccess:'',
    });
    const [formData,ChangeFormData] = useState({
        email:{
            element:'input',
            value:'',
            config:{
                name:'email_input',
                type:'email',
                placeholder:'Enter you email'
            },
            validation:{
                required:true,
                email:true
            },
            valid:false,
            validationMessage:''
        }
    });
    function submitForm(event:FormEvent) {

    }
     return (
        <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={(event => submitForm(event))} action="">
                <div className="enroll_title">
                    Enter your email
                </div>
                    <div className="enroll_input">
                    <FormFields/>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default Enroll;
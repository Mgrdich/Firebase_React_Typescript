import React, {BaseSyntheticEvent} from 'react';
import FormFields from "../UI/FormFields";
import {useForm} from "../../reusableHooks/UseForm";
import {signinValidation} from "../../Validations/signinValidation";
import {email, password} from "../../utilities/Objects";


const Signin = () => {
    const {handleChange, handleSubmit, values, errors,validForm} = useForm(signinValidation);
    let input1Name: string = email.config.name;
    let input2Name: string = password.config.name;
    console.log(validForm);
    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin: "100px"}}>
                <form noValidate={true} onSubmit={(event) => handleSubmit(event)} action="">
                    <h2>Login</h2>
                    <FormFields change={(e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={email}
                                value={(values.hasOwnProperty(input1Name)) ? values[input1Name] : ''}
                                error={errors[input1Name]}
                    />
                    <FormFields change={(e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={password}
                                value={(values.hasOwnProperty(input2Name)) ? values[input2Name] : ''}
                                error={errors[input2Name]}
                    />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
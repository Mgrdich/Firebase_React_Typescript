import React, {BaseSyntheticEvent} from 'react';
import FormFields from "../UI/FormFields";
import {useForm} from "../../reusableHooks/UseForm";
import validate from "../../Validations/homeEmail";
import {email, password} from "../../utilities/Objects";


const Signin = () => {
    const {handleChange, handleSubmit, values} = useForm(validate);
    let input1Name: string = email.config.name;
    let input2Name: string = password.config.name;
    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin:"100px"}}>
                <form onSubmit={handleSubmit} >
                <h2>Login</h2>
                    <FormFields change={ (e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={email} value={values[input1Name]}/>
                    <FormFields change={ (e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={password} value={values[input2Name]}/>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
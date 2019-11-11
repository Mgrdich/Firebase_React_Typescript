import React, {BaseSyntheticEvent} from 'react';
import FormFields from "../UI/FormFields";
import {useForm} from "../../reusableHooks/UseForm";
import validate from "../../Validations/homeEmail";
import {IInputInfo} from "../../Interfaces";
import {email, password} from "../../utilities/Objects";


const Signin = () => {
    const {handleChange, handleSubmit, values, errors, submitted} = useForm(validate);
    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin:"100px"}}>
                <form>
                <h2>Login</h2>
                    <FormFields change={ (e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={email} value={values}/>
                    <FormFields change={ (e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={password} value={values}/>
                </form>
            </div>
        </div>
    );
};

export default Signin;
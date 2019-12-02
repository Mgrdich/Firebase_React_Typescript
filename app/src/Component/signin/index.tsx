import React, {BaseSyntheticEvent, FormEvent, useEffect, useState} from 'react';
import FormFields from "../UI/FormFields";
import {useForm} from "../../reusableHooks/UseForm";
import {signinValidation} from "../../Validations/signinValidation";
import {email, password} from "../../utilities/Objects";
import {firebase} from "../../Firebase";
import {Redirect, RouteComponentProps} from "react-router";
import {useSession} from "../../reusableHooks/useSession";


const Signin: React.FC<RouteComponentProps> = (props) => {
    const {handleChange, handleSubmit, values, errors, validForm} = useForm(signinValidation);
    const {user} = useSession();
    const [formError, changeFormError] = useState<boolean>(false);
    let input1Name: string = email.config.name;
    let input2Name: string = password.config.name;

    useEffect(() => { //TODO:make a custom hook for if
        if (validForm) {
            firebase.auth().signInWithEmailAndPassword(
                values[input1Name],
                values[input2Name]
            ).then(() => {
                props.history.push("/dashboard");
            }).catch(errors => {
                changeFormError(true);
            })
        }
    }, [validForm]);


    const onSubmit = function (event: FormEvent) {
        handleSubmit(event);
    };

    if (user) {
        return <Redirect to="/dashboard"/>
    }

    return (
        <div className="container">
            <div className="signin_wrapper" style={{margin: "100px"}}>
                <form noValidate={true} onSubmit={(event) => onSubmit(event)} action="">
                    <h2>Login</h2>
                    <FormFields change={(e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={email}
                                value={(values.hasOwnProperty(input1Name)) ? values[input1Name] : ''}
                                error={errors[input1Name]}
                    />
                    <FormFields change={(e: BaseSyntheticEvent) => handleChange(e)} formDataConfig={password}
                                value={(values.hasOwnProperty(input2Name)) ? values[input2Name] : ''}
                                error={errors[input2Name]}
                    />
                    {formError ? <div className="error_label">Something is wrong try again</div> : <></>}
                    <button>Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Signin;
import React from 'react';
import {IFormFields, IInputInfo} from "../../Interfaces";

function renderTemplate(obj:IFormFields) {
    let formTemplate: JSX.Element | null = null;
    let {formDataConfig, change, value, error, submitted, id} = obj;
    switch (formDataConfig.element) {
        case ("input"): {
            formTemplate = (
                <>
                    <input
                        {...formDataConfig.config}
                        value={value}
                        onChange={(event => change(event))}
                        id={id}
                    />
                    {error &&
                    <label htmlFor="promotion" className="error_label">{error}</label>}
                    {submitted && !error &&
                    <label className="success_label">Congratulations</label>}
                </>
            );
            break;
        }
        default: {
            formTemplate = null;
        }
    }
    return formTemplate;
}

const FormFields: React.FC<IFormFields> = (props): JSX.Element => {

    return (
        <>
            {renderTemplate(props)}

        </>
    );
};

export default FormFields;
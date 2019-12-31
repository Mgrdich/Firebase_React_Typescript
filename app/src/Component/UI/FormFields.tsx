import React from 'react';
import {IFormFields} from "../../Interfaces";

function renderTemplate(obj: IFormFields) {
    let formTemplate: JSX.Element | null;
    let {formDataConfig, change, value, error, id, label, options} = obj;
    switch (formDataConfig.element) {
        case ("input"): {
            formTemplate = (
                <>
                    {
                        label ? <div className="label_inputs">{label}</div> : null
                    }
                    <input
                        {...formDataConfig.config}
                        value={value}
                        onChange={(event => change(event))}
                        id={id}
                    />
                    {error &&
                    <label htmlFor={id} className="error_label">{error}</label>}
                </>
            );
            break;
        }
        case ("select"): {
            formTemplate = (
                <>
                    {
                        label ? <div className="label_inputs">{label}</div> : null
                    }
                    <select
                        {...formDataConfig.config}
                        value={value}
                        onChange={(event => change(event))}
                        id={id}
                    >
                        <option value="">Select one</option>
                        {
                            options && options.length ? options.map((item) => (
                                <option key={item.key} value={item.key}>
                                    {item.value}
                                </option>
                            )) : null
                        }
                    </select>
                    {error &&
                    <label htmlFor={id} className="error_label">{error}</label>}
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

const FormFields: React.FC<IFormFields> = (props) => {

    return (
        <>
            {renderTemplate(props)}
        </>
    );
};

export default FormFields;
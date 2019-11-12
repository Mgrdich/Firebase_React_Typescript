import React from 'react';
import {IFormFields, IInputInfo} from "../../Interfaces";

const FormFields: React.FC<IFormFields> = ({formDataConfig, id, change, value, error,submitted}): JSX.Element => {

    function renderTemplate(frmData: IInputInfo) {
        let formTemplate: JSX.Element | null = null;
        switch (frmData.element) {
            case ("input"): {
                formTemplate = (
                    <>
                        <input
                        {...frmData.config}
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


    return (
        <>
            {renderTemplate(formDataConfig)}

        </>
    );
};

export default FormFields;
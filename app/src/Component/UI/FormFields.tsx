import React from 'react';
import {IFormFields, IInputInfo} from "../../Interfaces";
import {IFormData} from "../../Interfaces";

const FormFields: React.FC<IFormFields> = ({formDataConfig, id, change}): JSX.Element => {

    function renderTemplate(frmData: IInputInfo) {
        let formTemplate: JSX.Element | null = null;
        switch (frmData.element) {
            case ("input"): {
                formTemplate = (
                    <div>
                        <input
                            {...frmData.config}
                            value={frmData.value}
                            onChange={(event => change({event, id}))}
                        />
                    </div>
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
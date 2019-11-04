import React from 'react';
import {IFormFields} from "../../Interfaces";
import {IFormData} from "../../Interfaces";

const FormFields: React.FC<IFormFields> = ({formData, id, change}): JSX.Element => {
    function renderTemplate(frmData: IFormData) {
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
        <div>
            {renderTemplate(formData)}
        </div>
    );
};

export default FormFields;
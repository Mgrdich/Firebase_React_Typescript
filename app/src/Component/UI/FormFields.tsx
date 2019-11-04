import React from 'react';
import {IFormFields} from "../../Interfaces";
import {IFormData} from "../../Interfaces";

const FormFields:React.FC<IFormFields> = ({formData,id}) => {
    function renderTemplate(frmData:IFormData){
        let formTemplate = null;
        switch (frmData.element) {
            case ("input"):{

                break;
            }
            default:{

            }
        }
    }
    return (
        <div>
            {/*{renderTemplate(formData)}*/}
        </div>
    );
};

export default FormFields;
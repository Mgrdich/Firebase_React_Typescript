/*Global Objects*/

import {IInputInfo} from "../Interfaces";

export let email: IInputInfo = {
    element: "input",
    config: {
        name: 'email_input',
        type: 'email',
        placeholder: 'Enter you email',
    }
};

export let password: IInputInfo = {
    element: "input",
    config: {
        name: 'password_input',
        type: 'password',
        placeholder: 'password',
    }
};
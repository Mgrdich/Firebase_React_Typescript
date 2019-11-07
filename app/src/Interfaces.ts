interface Link {
    linkTo: string;
    link?: boolean;
}

interface ReactChildren {
    children: JSX.Element | string | number;
}

export interface IStripe {
    background: string;
    left: number;
    rotate: number;
    top: number;
    delay: number;
}

export interface LogoProps extends Link {
    height: number;
    width: number;
}


export interface LayoutProps extends ReactChildren {

}

export interface ITags extends Link, ReactChildren {
    bck: string;
    size: string;
    color: string;
    add?: any;
}

export interface ITagsJson {
    bck: string;
    size: string;
    color: string;
    content: string;
    add: any
}

export interface IcardsAnimate {
    left: number;
    bottom: number;
}


export interface IPlayerProps {
    number: string;
    name: string;
    lastname: string;
    bck: string;
}


/*--------------------------------------------------------------*/

export interface IFormData {
    element: string; //check later for only two values
    value: string;
    config: {
        name: string;
        type: string;
        placeholder: string;
    },
    validation: {
        required: boolean;
        email: boolean;
    },
    valid: boolean;
    validationMessage: string;

}

export interface IFormFields {
    id?: string;
    change: any;
    formDataConfig:IInputInfo;
    value:string;
}

export interface IInputInfo {
    element: string;
    config: {
        name: string;
        type: string;
        placeholder: string;
    }
}
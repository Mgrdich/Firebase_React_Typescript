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
    number:string;
    name:string;
    lastname:string;
    bck:string;
}
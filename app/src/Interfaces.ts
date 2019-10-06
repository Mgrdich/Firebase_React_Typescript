export interface IStripe {
    background:string;
    left:number;
    rotate:number;
    top:number;
    delay:number;
}

export interface LogoProps {
    linkTo: string;
    link?: boolean;
    height: number;
    width: number;
}



export interface LayoutProps {
    children:JSX.Element;
}
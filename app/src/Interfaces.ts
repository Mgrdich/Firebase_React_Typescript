interface Link {
    linkTo: string;
    link?: boolean;
}
interface ReactChildren {
    children:JSX.Element;
}
export interface IStripe {
    background:string;
    left:number;
    rotate:number;
    top:number;
    delay:number;
}

export interface LogoProps extends Link{
    height: number;
    width: number;
}



export interface LayoutProps extends ReactChildren {

}

export interface ITags extends Link{
    bck:string;
    size:string;
    color:string;
    add?:any;
}
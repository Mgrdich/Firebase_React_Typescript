interface Link {
    linkTo: string;
    link?: boolean;
}
interface ReactChildren {
    children:JSX.Element | string | number;
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

export interface ITags extends Link,ReactChildren{
    bck:string;
    size:string;
    color:string;
    add?:any;
}
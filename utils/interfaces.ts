export interface User{
    id:string,
    name?:string,
    email?:string,
    image?:string,
    role:string,
}

export interface Game{
    id:string,
    title:string,
    description:string,
    price:number,
}

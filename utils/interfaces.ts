export interface User{
    id:string,
    name?:string,
    email?:string,
    image?:string,
    role:string,
    games:Game[];
    purchases:Purchase[],
}


export interface Game{
    id:string,
    title:string,
    description:string,
    price:number,
    gameMidia?:GameMidia[],
}

export interface Purchase{
    id:string,
    amount:number,
    createdAt?:Date
}

export interface GameMidia{
    id:string,
    url:string,
    description:string,
    gameId:string
}
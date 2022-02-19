//declaración de funciones.
//uso explicito:
let phone:number; 
phone=2281088983;

let isPro:boolean;
isPro=true;

let username:string;
username="Alejandro";

//templete string
let userInfo:string;

//esto es un template literal:
userInfo=`
    userInfo:
    username:${username},
    firstname:${username+ `Hernández`},
    phone:${phone},
    isPro:${isPro}
`;
console.log(`userInfo`, userInfo);



























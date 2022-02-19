"use strict";
//declaración de funciones.
//uso explicito:
let phone;
phone = 2281088983;
let isPro;
isPro = true;
let username;
username = "Alejandro";
//templete string
let userInfo;
//esto es un template literal:
userInfo = `
    userInfo:
    username:${username},
    firstname:${username + `Hernández`},
    phone:${phone},
    isPro:${isPro}
`;
console.log(`userInfo`, userInfo);

let NomeHeroi = "David"
let XpHeroi = 7000

let niveHeroi= null

if (XpHeroi < 1000) {
    niveHeroi = "Ferro";
}else if(XpHeroi >= 1001 && XpHeroi <=2000){
    niveHeroi ="Prata";
}else if(XpHeroi >= 2001 && XpHeroi <=5000){
    niveHeroi = "Ouro";
}else if(XpHeroi >= 6001 && XpHeroi <=7000){
    niveHeroi = "Platina";
}else if(XpHeroi >= 7001 && XpHeroi <=8000){
    niveHeroi = "Imortal";
}else if(XpHeroi >= 10001){
    niveHeroi = "Radiante";
}else{
    nivelHeroi = "Nível indeterminado";
}

console.log("O herói de nome " + NomeHeroi + " está no nível de " + niveHeroi + ".");

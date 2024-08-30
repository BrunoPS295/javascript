var agora = new Date()
var hora = agora.getHours()
if(hora > 6  && hora < 12){
    console.log (`Bom dia agora são ${hora}`)
}else if(hora > 12  && hora < 18){
    console.log (`Boa tarde agora são ${hora}`) 
}else{
    console.log (`Boa noite agora são ${hora}`)
}
function trocarFundoPorHorario (){
    const agora = new Date();
    const hora = agora.getHours();

    let imagemFundo;

    if (hora>= 6 && hora <12){
        imagemFundo = "url(../img/manha.jpg)";
    }
    else if (hora>= 12 && hora < 18){
        imagemFundo = "url(../img/tarde.jpg)";
    }
    else{
        imagemFundo = "url(../img/noite.jpg)";
    }

    document.body.style.backgroundImage = imagemFundo;

}

document.addEventListener('DOMContentLoaded', trocarFundoPorHorario);


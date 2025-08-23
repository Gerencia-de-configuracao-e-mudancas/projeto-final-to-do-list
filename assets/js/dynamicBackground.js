function trocarFundoPorHorario (){
    const agora = new Date();
    const hora = agora.getHours();

    let imagemFundo;

    if (hora>= 6 && hora <12){
        imagemFundo = "url(assets/img/manha.jpg)";
    }
    else if (hora>= 12 && hora < 18){
        imagemFundo = "url(assets/img/tarde.jpg)";
    }
    else{
        imagemFundo = "url(assets/img/noite.jpg)";
    }

    document.body.style.backgroundImage = imagemFundo;

}

document.addEventListener('DOMContentLoaded', trocarFundoPorHorario);


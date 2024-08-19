function gritar(){
    alert("Ahhhhhhhhhhhhhhhhhh!");
}

function perguntar(){
    var nome;
    nome = prompt("Qual o seu nome? ");
    alert("Olá " + nome);

}

function muda_texto(){
    var h1 = document.getElementsByTagName("h1");

    if(h1[0].innerText == "Geek University"){
        h1[0].innerText = "Evolua seu lado geek!";
    }
    else{
        if(h1[0].innerText == "Evolua seu lado geek!"){
            h1[0].innerText = "Geek University";
        }
    }
}

function incrementar(){
    var p1 = document.getElementById("p1");

    p1.innerText = parseInt(p1.innerText) + 1;
}

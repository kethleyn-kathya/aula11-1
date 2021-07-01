 function mostrarBoasVindas(){
     let nome = document.querySelector("#nome");
     let idade = document.querySelector("#idade");

     let h1 = document.querySelector("#boasVindas");
     h1.innerHTML = `Bem vindo, ${nome.value}! Você tem ${idade.value} anos!`;

     let main = document.querySelector("main");
     main.appendChild(h1);
 }
const botao = document.querySelector(".btn-plataforma"); //seria usado # se fosse ID, . para classes

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  
    //quando clicar ele ficará ativo, ao clicar novamente nao estará mais
    elementoPlataformas.classList.toggle("ativo")

}); 
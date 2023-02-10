const btnMobile = document.querySelector(".cabecalho__navegacao-btn-menu");
const nav = document.querySelector(".cabecalho__navegacao");
btnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});



const linksMenu = document.querySelectorAll('.cabecalho__navegacao-menu-link');

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        if(nav.classList.contains("active")) {
            return nav.classList.remove("active")
         }
    })
    //console.log(link.classList.contains('active'))
})



const contato = document.querySelectorAll(".conteudo__contato-especifico-card-link")
let mensagem = document.getElementById("assunto")
console.log(mensagem)

for (let i = 0; i < contato.length; i++) {
    contato[i].addEventListener("click", () => {
        let assunto = contato[i].attributes[2].value
         mensagem.value = assunto

         console.log(assunto)
         //console.log(mensagemAssunto)
    })
    
}



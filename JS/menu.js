// // // // so vai carregar os documentos quando a pagina estiver carregada
// Documento Jquery precisamos puxar a documentação por completa.

$(document).ready(function(){
    $('.mobile-btn').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    
    })
})

// btn.addEventListener('click', function() {
//     menu.classList.toggle('active');

//     icon.classList.toggle('fa-bars');
//     icon.classList.toggle('fa-x');
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const btn = document.querySelector('.mobile-btn');
//     const menu = document.querySelector('.mobile-menu');
//     const icon = btn.querySelector('i');

//     btn.addEventListener('click', () => {
//         menu.classList.toggle('active');

//         // troca o ícone (menu ↔ X)
//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-x');
//     });
// });




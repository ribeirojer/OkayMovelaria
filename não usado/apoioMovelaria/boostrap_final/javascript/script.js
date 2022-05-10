//EVENTO SCROLL
$(window).scroll(function () {
    var altura = $(window).scrollTop();
    if (altura > 400) {
        $(".botao-top").show();
    } else {
        $(".botao-top").hide();
    }
});

$('.botao-top a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 1200);
});


//VALIDAÇÃO DO FORMULÁRIO
function validaNome(nome) {
    document.getElementById("nome").value.toUpperCase();
    if (!isNaN(nome.value)) {
      nome.style.border = "red solid 3px";
      nome.style.boxShadow = "4px red";
    } else {
      nome.style.border = "green solid 3px";
      nome.style.boxShadow = "4px green";
    }
  }

  function validaSobreNome(sobrenome) {
    document.getElementById("sobrenome").value.toUpperCase();
    if (!isNaN(sobrenome.value)) {
        sobrenome.style.border = "red solid 3px";
        sobrenome.style.boxShadow = "4px red";
    } else {
        sobrenome.style.border = "green solid 3px";
        sobrenome.style.boxShadow = "4px green";
    }
  }

  function validaEmail(email) {
    document.getElementById("email").value; 
    if (email.value == "" || email.value.indexOf('@') < 0) {
      email.style.border = "red solid 3px";
      email.style.boxShadow = "4px red";
    } else {
      email.style.border = "green solid 3px";
      email.style.boxShadow = "4px green";
    }
  }

  function validaPassword(password) {
    if (password.value == "") {
        password.style.border = "red solid 3px";
        password.style.boxShadow = "4px red";
    } else {
        password.style.border = "green solid 3px";
        password.style.boxShadow = "4px green";
    }
  }

  function validaEndereco(endereco) {
    if (!isNaN(endereco.value)) {
      endereco.style.border = "red solid 3px";
      endereco.style.boxShadow = "4px red";
    } else {
      endereco.style.border = "green solid 3px";
      endereco.style.boxShadow = "4px green";
    }
    document.getElementById("endereco").value.toUpperCase();
  }
  function validaCidade(cidade) {
    if (!isNaN(cidade.value)) {
      cidade.style.border = "red solid 3px";
      cidade.style.boxShadow = "4px red";
    } else {
      cidade.style.border = "green solid 3px";
      cidade.style.boxShadow = "4px green";
    }
    document.getElementById("cidade").value.toUpperCase();
  }

function validacao(){
    validaNome(nome);
    validaSobreNome(nome);
    validaEmail(email);
    validaPassword(password);
    validaEndereco(endereco);
    validaCidade(cidade);
}
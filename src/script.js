$(".btn").click(function copiar() {
    $(this).text("Adicionado!");
});

$("#btn4").click(function () {
    swal("Produto adicionado no carrinho!");
});

$("#btn5").click(function () {
    swal("Produto adicionado no carrinho!");
});
$("#btn6").click(function () {
    swal("Produto adicionado no carrinho!");
});
$("#btn7").click(function () {
    swal("Produto adicionado no carrinho!");
});
$("#btn8").click(function () {
    swal("Produto adicionado no carrinho!");
});
$("#btn9").click(function () {
    swal("Produto adicionado no carrinho!");
});

function carrinho() {
    document.getElementById("dados").disabled = true;
    document.getElementById("dados").style.backgroundColor = (ffd99f);
    $("dados").on("click", function () {
        $(this).prop("disabled", true);
    });
}

function submitMesssage() {

    let nome = document.getElementById('name').value;
    let telefone = document.getElementById('telephone').value;
    let assunto = document.getElementById('subject').value;
    let msg = document.getElementById('msg').value;

    sendEmail(nome, telefone, assunto, msg)

    alert(nome + ', Sua mensagem foi enviada com sucesso!')
}

function sendEmail(nome, telefone, assunto, msg) {

    var params = {
        nome: nome,
        telefone: telefone,
        assunto: assunto,
        msg: msg,
    }

    emailjs.send('Italian_bistro', 'template_5fsgfuo', params)
        .then(function (response) {
            console.log('SUCESS!', response.status, response.text);
        }, function (error) {
            console.log('ERROR!', error)
        })
}
// Validação de dados-login

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

// FireBase

function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "index.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function register() {
    window.location.href = "register.html";
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}

function register() {
    window.location.href = "pages/register/register.html";
}

function toggleEmailErrors() {
    const email = form.email().value
    if (!email) {
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }

    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none";
    } else {
        document.getElementById('email-invalid-error').style.display = "block";
    }
}

function togglePasswordErrors() {
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('password-required-error').style.display = "block";
    } else {
        document.getElementById('password-required-error').style.display = "none";
    }
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    document.getElementById('recover-password').disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
}







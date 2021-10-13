var cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/


var cpfUsuario = prompt("Digite seu cpf") 

if (cpfUsuario.match(cpfRegex)) {
alert("CPF correto!")
location.reload(true);
}

else {
alert("CPF não confere")
location.reload(true)

} 

10647021043
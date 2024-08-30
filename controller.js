//FUNÇÃO PARA VALIDAÇÃO DE ACESSO  

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // VERIFICA SE O 'LOGINEMAIL' OU 'LOGINSENHA' ESTÁ VAZIO OU INDEFINIDO
    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else {
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}
var cpf = document.getElementById("cpf").value;
function ValidarCpf(cpf){
    
    cpf = cpf.replace(/[^\d]+/g,'');

if (cpf.length !== 11 ||/^(\d)\1{10}$/.test(cpf)){
        return false;
}


let soma = 0;
let resto;

for (let i = 1; i<9;i++){
    soma+= parseInt(cpf.substring(i - 1, i)* (11 - i));
}

resto = (soma*10)% 11;
if((resto === 10)||(resto === 11)){
    resto = 0;
}
if(resto != parseInt(cpf.substring(10,11))) {
    return false;
}

return false;

}


// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadoLista = [];
var emailLista = [];
var cpfLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
    let cpfUser = document.getElementById('cpf').value;
    
    


    // VEREFICA SE NÃO ESTA VAZIO OU INDEFINIDO (OU SEJA, VERDADEIRO)
    if(document.forms[0].emailcad.value == "" || 
    document.forms[0].emailcad.value.indexOf('@') == -1 ||
    document.forms[0].emailcad.value.indexOf('.') == -1){
        alert("Por favor, preencha seu email corretamente");
    }else if (ValidarCpf(cpf)){
    }
    if (nomeUser) {
        dadoLista.push(nomeUser);
        emailLista.push(emailUser);
        cpfLista.push(cpfUser);

       
        //console.log(dadosLista);

        // A FUNÇÃO 'CRIALISTA()' É ENTÃO CHAMADA PARA ATUALIZAR OU CRIAR A LISTA COM NOVOS DADOS 
        criaLista();

        // LIMPAR O TEXTO NO CAMPO DE ENTRADA
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
        document.getElementById('cpf').value = "";
    }

    // SE 'NOMEUSER' NÃO FOR FORNECIDO (OU SEJA, FALSO), ESTE BLOCO SERÁ EXECUTADO
    else {
        alert("Por favor informe um nome para cadastro");
    }
}
// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Cpf</th><th>Ações</th</th>";

    // ITERA SOBRE CADA ELEMENTO DO ARRAY 'DADOSLISTA'
    for (let i = 0; i <= (dadoLista.length - 1); i++) {
        tabela += "<tr><td>" + dadoLista[i] + "</td><td>" + emailLista[i] + "</td><td>" + cpfLista[i] + "</td><td><button type= 'button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type= 'button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

        // ESSA LINHA DEFINE O HTML INTERNO DO ELEMENTO
        document.getElementById('tabela').innerHTML = tabela;
    }

}

// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i) {
    document.getElementById('nomeUser').value = dadoLista[(i - 1)];
    document.getElementById('emailUser').value =  emailLista[(i - 1)];
    document.getElementById('cpf').value =  cpfLista[(i - 1)];

    // REMOVE UM ELEMENTO DO ARRAY 
    dadoLista.splice(dadoLista[(i - 1)], 1);
    emailLista.splice(emailLista[(i - 1)], 1);
    cpfLista.splice(cpfLista[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i) {
    dadoLista.splice((i - 1), 1);
    emailLista.splice((i - 1), 1);
    cpfLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}



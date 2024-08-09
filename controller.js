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

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadoLista = [];
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    // VEREFICA SE NÃO ESTA VAZIO OU INDEFINIDO (OU SEJA, VERDADEIRO)
    if (nomeUser) {
        dadoLista.push(nomeUser);
        //console.log(dadosLista);

        // A FUNÇÃO 'CRIALISTA()' É ENTÃO CHAMADA PARA ATUALIZAR OU CRIAR A LISTA COM NOVOS DADOS 
        criaLista();

        // LIMPAR O TEXTO NO CAMPO DE ENTRADA
        document.getElementById('nomeUser').value = "";
    }

    // SE 'NOMEUSER' NÃO FOR FORNECIDO (OU SEJA, FALSO), ESTE BLOCO SERÁ EXECUTADO
    else {
        alert("Por favor informe um nome para cadastro");
    }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th</th>";

    // ITERA SOBRE CADA ELEMENTO DO ARRAY 'DADOSLISTA'
    for (let i = 0; i <= (dadoLista.length - 1); i++) {
        tabela += "<tr><td>" + dadoLista[i] + "</td><td><button type= 'button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type= 'button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

        // ESSA LINHA DEFINE O HTML INTERNO DO ELEMENTO
        document.getElementById('tabela').innerHTML = tabela;
    }

}

// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i) {
    document.getElementById('nomeUser').value = dadoLista[(i - 1)];

    // REMOVE UM ELEMENTO DO ARRAY 
    dadoLista.splice(dadoLista[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i) {
    dadoLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

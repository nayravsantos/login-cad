//FUNÇÃO PARA VALIDAÇÃO DE ACESSO  
 
function acessar(){
    let loginEmail =document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    
//
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        //alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
}
 
// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadoLista = [];
function salvarUser(){
    let nomeUser = document.getElementById
    ('nomeUser').value;

    if(nomeUser){
        dadoLista.push(nomeUser);
        //console.log(dadosLista);
        criaLista();

// LIMPAR O TEXTO NO CAMPO DE ENTRADA
        document.getElementById('nomeUser').value = "";
    }else{
        alert("Por favor informe um nome para cadastro");
    }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th></th>Ações</th</tr>";

// ITERA SOBRE CADA ELEMENTO DO ARRAY 'DADOSLISTA'
    for(let i=0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type= 'button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type= 'button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";

  // ESSA LINHA DEFINE O HTML INTERNO DO ELEMENTO
        document.getElementById('tabela').innerHTML = tabela;
    }

}

// FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadoLista.splice(dadoLista[(i - 1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i){
    dadoLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

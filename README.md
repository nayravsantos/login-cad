# Cadastro

## Visão geral
Este arquivo HTML é uma página da web simples para registro de usuário. Ele permite que os usuários insiram seus nomes, salvem-nos e exibam uma lista de nomes salvos com opções para editar ou excluir cada entrada. A página utiliza Bootstrap para estilização e inclui funções JavaScript para lidar com interações do usuário.

## Estrutura do arquivo
* Estrutura HTML: O arquivo HTML contém a estrutura básica de uma página da web, incluindo a declaração DOCTYPE e as seções head e body.
* Estilo: a página usa o Bootstrap 5 para estilo, que é incluído por meio de um link CDN na seção principal.
* JavaScript: As funções JavaScript para manipular interações do usuário (como salvar, editar e excluir dados do usuário) são carregadas de um controller.jsarquivo externo.

## Componentes-chave
### Seção principal:
* A headseção inclui meta tags para codificação de caracteres, compatibilidade e configurações de viewport.
* O CSS do Bootstrap está vinculado ao estilo dos elementos do formulário e da tabela.
* O título da página está definido como "Cadastro".

### Seção de formulário:
* Um contêiner div
* O formulário inclui um rótulo e um campo de entrada para o nome do usuário ( id="nomeUser").
* Um botão “Salvar” ( btn btn-success) adiciona o salvarUser()função quando clicar.

### Seção de tabela:
* Outro contêiner div contém uma tabela ( id="tabela").
* A tabela usa classes Bootstrap ( table table-striped).

# Login

Esta é uma página de login simples para um aplicativo da web, projetada com HTML e Bootstrap. Ela permite que os usuários insiram seu e-mail e senha para fazer login.

## Desenvolvimento
* HTML : Usado para a estrutura do formulário de login e link.
* CSS : Estilos personalizados devem ser adicionados em main.css.
* JavaScript : A lógica para lidar com login deve ser implementada em controller.js.

## Uso
1. Abra index.html em um navegador da web.
2. Digite seu e-mail e senha nos respectivos campos.
3. Clique no botão "ACESSAR" para tentar fazer login.
4. Utilize o link "Cadastre-se" para navegar até a página de inscrição, se necessário.
 
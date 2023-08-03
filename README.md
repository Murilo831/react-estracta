# Tabela Paginada

> Status: Developing 

## Lista Tabela Paginada com React

Este é um projeto em React que implementa uma tela de tabela paginada com recursos de pesquisa e ordenação. 
<br>
A <strong>tabela exibe dados fictícios gerados dinamicamente</strong> com a ajuda da <strong>biblioteca faker</strong> e permite ao usuário navegar entre as páginas, filtrar os dados por <strong>nome ou id</strong>, e classificar os dados por coluna.

## Requisitos do projeto

Para executar este projeto, você precisará ter o seguinte instalado em sua máquina:

- Node.js e npm
- Conhecimento básico de React e componentes

## Tecnologias usadas

<table>
    <tr>
    <td>React</td>
    <td>Faker</td>
    <td>react-paginate</td>
    </tr>
    <tr>
    <td>18.2.0</td>
    <td>5.5.3</td>
    <td>5.0.1</td>
    </tr>
</table>

## Estrutura do projeto

- A pasta `src` contém os componentes React utilizados no projeto, como `DataList`, que exibe a tabela paginada.

- O arquivo `data.js` contém a função para gerar dados fictícios utilizados no projeto.

- O arquivo `App.js` é o componente principal do projeto, que contém o código da tela de lista/tabela paginada.

- A pasta `public` contém o arquivo `index.html`, que é a página principal da aplicação.

- Os arquivos `package.json` e `package-lock.json` são utilizados para gerenciar as dependências do projeto.

## Instruções de instalação

```bash
# Clone este repositório para sua máquina local
git clone https://github.com/seu-usuario/lista-tabela-paginada.git

# Acesse a pasta do projeto
cd lista-tabela-paginada

# Instale as dependências do projeto
npm install


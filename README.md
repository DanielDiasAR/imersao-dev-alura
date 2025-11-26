Base de Conhecimento de Tecnologias
Este é um projeto simples de uma "Base de Conhecimento" desenvolvido como parte da Imersão Dev da Alura + Google. 
A aplicação web exibe uma coleção de cartões com informações sobre diversas tecnologias de programação, como linguagens, frameworks e ferramentas, e permite a busca dinâmica por elas.

✨ Funcionalidades
Exibição Dinâmica: Carrega dados de um arquivo data.json e os renderiza como cartões informativos na interface.
Busca em Tempo Real: Filtra as tecnologias exibidas conforme o usuário digita no campo de busca. A pesquisa é feita no nome e na descrição de cada item.
Estrutura de Dados Simples: Novas tecnologias podem ser facilmente adicionadas editando o arquivo data.json, sem a necessidade de alterar o código-fonte.
🚀 Tecnologias Utilizadas
HTML5: Para a estrutura semântica da página.
CSS3: Para a estilização dos componentes, como os cartões e o campo de busca.
JavaScript: Para a lógica de busca, manipulação do DOM e carregamento dos dados.
JSON: Como formato para armazenar os dados da base de conhecimento.
⚙️ Como Funciona
A aplicação é construída com uma arquitetura de front-end simples:

O index.html fornece a estrutura básica da página, incluindo o campo de busca e o contêiner onde os cartões serão exibidos.
Ao carregar a página, o script.js faz uma requisição fetch para o arquivo data.json para obter os dados.
Após receber os dados, o script percorre a lista de tecnologias e cria dinamicamente um cartão (elemento <article>) para cada uma, 
preenchendo-o com as informações correspondentes (nome, descrição, ano, criador, etc.).
Um event listener é adicionado ao campo de busca para monitorar a entrada do usuário. A cada alteração, 
o script filtra a lista de tecnologias com base no termo digitado e renderiza novamente apenas os cartões que correspondem à busca.

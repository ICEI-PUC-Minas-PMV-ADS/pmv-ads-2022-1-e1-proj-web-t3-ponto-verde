# Plano de Testes de Software


## Testes Home Page:

Referência: 
- CR01

Descrição da tela:
- Tela principal do site.
- Lado direito da tela, botão de login.
- Lado esquerdo da tela, botão menu.

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.


## Testes Login:

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar os campos.
- Campo do e-mail: aceita letras e números, necessário escrever @
- Campo da senha: permitindo letras e números, minímo de 6 caracteres
- Caixa Lembrar senha: Sem funcionalidade

Execução dos campos: permite inserir dados. 

Objetivo: testar a funcionalidade.
- Botao Entrar: com alerta correspondente ("usuario ou senha invalido" ou "sucesso")
- Local Não possui conta?: leva para o local de cadastro.

Execução das funcionalidades: Funcionam exceto funcionalidade para recuperar a senha e lembrar senha


## Testes Cadastro:

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar os campos.
- Campo do nome: Aceita letras e números, minímo de 3 caracteres, máximo de 35.
- Campo do endereço: Aceita letras e números, minímo de 10 caracteres, máximo de 50.
- Campo do e-mail: Aceita letras e números, necessário escrever @(arroba)
- Campo do telefone: Aceita somente números, minímo de 8 caracteres, máximo de 20.
- Campo do CPF: Aceita somente números, minímo de 10 caracteres, máximo de 25.
- Campo da senha: Aceita letras e números, minímo de 6 caracteres

Execução dos campos: permite inserir dados. 

Objetivo: testar a funcionalidade.
- Botao Cadastrar: Botão corresponde enviando dados ao local storage.
- Botao revelar senha: Corresponde trocando input da senha de password para text e vice-versa.


Execução das funcionalidades: Funcionam, cadastro só é validado se todos campos forem preenchidos.


## Testes Contato:

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar os campos.
- Campo do nome: Aceita letras e números, minímo de 3 caracteres, máximo de 35, campo requerido.
- Campo do e-mail: Aceita letras e números, necessário escrever @(arroba), minímo de 3 caracteres, máximo de 35, campo requerido.
- Campo do mensagem: Aceita letras e números, máximo de 220 caracteres, campo requerido.

Execução dos campos: permite inserir dados. 

Objetivo: testar a funcionalidade.
- Botao Enviar mensagem: Botão corresponde enviando os dados para o email designado atrávez de um formulário estático.

Execução das funcionalidades: Funcionam.


## Testes Agendamento de coleta:

Objetivo: Testar a funcionalidade.
- campo Data: ultiliza um imput padrão do tipo "Date" para armazenar a data do agendamento.
- campo Hora: ultiliza um imput padrão do tipo "Time" para armazenar o horario do agendamento.
- Botão de agendamento: Armazena as informações apenas quando ambos os campos estiverem devidamente preenchidos.

Execução: O armazenamendo funciona corretamente. 


## Testes Cestos Seletivos:

Referência: 
- CR08

Direcionamento: 
- Clicar na opção "menu" ao lado esquerdo da tela.
- Selecionar página.

Descrição da tela:
- A tela demonstra em formato de slides, três imagens.
- Descrição em formato de texto.
- Botão "adquirir" que direciona para tela externa de compras.

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar a funcionalidade.
- Botão Adquirir: Direciona para página de compras de cestos seletivos.

Execução das funcionalidades: Funciona, abre nova guia para compras.



## Testes Selo Verde:

Referência: 
- CR09

Direcionamento: 
- Clicar na opção "menu" ao lado esquerdo da tela.
- Selecionar página.

Descrição da tela:
- A tela demonstra em formato de texto sobre a obtenção do selo verde.

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.


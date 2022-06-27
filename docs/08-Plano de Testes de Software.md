# Plano de Testes de Software


## Testes Home Page:

Caso de teste: 
- CT-01

Requisitos Associados:
- RF01 O site deve apresentar na página principal os conteúdos referentes ao nome do site, serviços e os propósitos envolvidos no processo da reciclagem.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.


## Testes Login:

Caso de teste: 
- CT-02

Requisitos Associados:
- RF04 O site deve apresentar funcionalidade de login e cadastro de usuários.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão de login no canto direito da tela

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

Caso de teste: 
- CT-03

Requisitos Associados:
- RF04 O site deve apresentar funcionalidade de login e cadastro de usuários.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão de login no canto direito da tela
5) Clicar no botão "não possui uma conta?" realizar cadastro

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

Caso de teste: 
- CT-04

Requisitos Associados:
- RF06 O site deve conter uma página com disponibilidade para o usuário entrar em contato com a plataforma.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão menu no canto esquerdo da tela
5) Clicar na opção contato

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

Caso de teste: 
- CT-05

Requisitos Associados:
- RF05 O site deve permitir que o usuário solicite uma coleta de lixo reciclável.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão menu no canto esquerdo da tela
5) Clicar na opção Agendar Coleta

Objetivo: Testar a funcionalidade.
- campo Data: ultiliza um imput padrão do tipo "Date" para armazenar a data do agendamento.
- campo Hora: ultiliza um imput padrão do tipo "Time" para armazenar o horário do agendamento.
- campo Endereço de Coleta: ultiliza um imput padrão do tipo "Text" para armazenar endereço do agendamento.
- campo Tipos de Resíduo: ultiliza um imput padrão do tipo "Text" para armazenar tipos de resíduos.
- Botão de agendamento: Armazena as informações apenas quando ambos os campos estiverem devidamente preenchidos.

Execução: O armazenamendo funciona corretamente. 


## Testes Cestos Seletivos:

Caso de teste: 
- CT-06

Requisitos Associados:
- RF07 O site deve informar sobre cestos seletivos e direcionar para compra.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão menu no canto esquerdo da tela
5) Clicar na opção Cestos Seletivos

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar a funcionalidade.
- Botão Adquirir: Direciona para página de compras de cestos seletivos.

Execução das funcionalidades: Funciona, abre nova guia para compras.


## Testes  Requisitos Selo Verde:

Caso de teste: 
- CT-07

Requisitos Associados:
- RF08 O site deve informar os benefícios e requisitos para obtenção do selo verde.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão menu no canto esquerdo da tela
5) Clicar na opção Requisitos Selo Verde

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.


## Testes Locais de Coleta:

Caso de teste: 
- CT-08

Requisitos Associados:
- RF02 O site deve possuir a funcionalidade de geolocalização, assim como, um mapa com possíveis locais de coleta na região.

Passos:
1) Acessar o Navegador
2) Informar o endereço do Site
3) Visualizar a página principal
4) Clicar no botão menu no canto esquerdo da tela
5) Clicar na opção Locais de Coleta

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone: não responsivo,
- Dimensões da navegabilidade (1920 x 1080): responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar a funcionalidade.
- Funcionalidade Geolocalização: Funciona, aparece pontos de coleta.
- Botão de agendar: Direciona para página de agendamento de coleta.

Execução das funcionalidades: Funcionam, botão direciona para a página seguinte e apresenta locais de coleta.




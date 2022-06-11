# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas. 

## Testes Login:

Objetivo: testar a responsividade no smartphone e navegabilidade.
- Dimensões smartphone (iPhone Se, XR, 12 Pro, Galaxy S8+,  Galaxy S20 Ultra): não responsivo,
- Dimensões da navegabilidade (1920 x 1080):  responsivo.

Execução da responsividade: Navegabilidade responsivo, dimensões de smartphones não responsivos.

Objetivo: testar os campos.
- Local do e-mail: aceita letras e números, necessario escrever @
- Local da senha: permitindo letras e números, minímo de 6 caracteres
- Local cadastre-se: botão corresponde enviando dados ao local storage

Execução dos campos: permite inserir dados. 

Objetivo: testar a funcionalidade.
- Botao Entrar: com alerta correspondente ("usuario ou senha invalido" ou "sucesso")
- Local cadastre-se: leva para o local de cadastre-se.

Execução das funcionalidades: funcionam exceto funcionalidade para recuperar a senha

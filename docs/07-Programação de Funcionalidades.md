# Programação de Funcionalidades
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.

<h3> Tela de Login (RF04)</h3>
A tela de login permite ao usuario fazer login no site, com a opçao de lembrar seu login/senha, tambem permite o usuário ser direcionado para a tela de cadastro, através do link "Não possui conta?" e também há uma opçao de "Esqueci minha senha" aonde o usuário que esqueceu sua senha, receberá um email para que o mesmo possa recupera-la
<br><br>

![image](https://user-images.githubusercontent.com/100742971/168402014-64c7768c-677a-4be1-a2cf-20e8c8db6715.png)

<h4>Requisitos atendidos</h4>

- RF04
- RNF001

<h4>Artefatos da funcionalidade</h4>

- login.html
- login.css

<h4>Estrutura de dados</h4>

            <h1 style="color: black;">Login</h1>
            <input type="text" placeholder="Usuário">
            <br><br>
            <input type="password" placeholder="Senha">
            <br><br>
            <input type="checkbox" value="savepass" id="lembrarsenha">Lembrar senha
            <br><br>
            <a href="Home.html"><button>Entrar</button></a>
            <br><br>
            <a href="Home.html">Não possui conta?</a>
            <br><br>
            <a href="Home.html">Esqueci minha senha</a>

Instruções de acesso

- Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
- Descompacte o arquivo em uma pasta específica;
- Abra o Visual Studio Code e execute o Live Server;
- Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/login.html 

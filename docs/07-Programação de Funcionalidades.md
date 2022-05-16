# Programação de Funcionalidades
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.


<h3> Tela Home</h3>
A tela principal do site apresenta as informações sobre o conceito e como funciona o sistema de coleta oferecido.
A esquerda da tela, a barra de menu demonstra as demais funcionalidades do site.
<br><br>

![image](https://user-images.githubusercontent.com/100734910/168500443-e88d257e-04ed-49b4-b434-2d538b1bca09.png)


<h4>Requisitos atendidos</h4>

- RF01
- RNF001
- RNF003

<h4>Artefatos da funcionalidade</h4>

- home.html
- home.css

<h4>Estrutura de dados</h4>

     <div class="conteudo">
      <div class="box">
        <h2 id="titulo"><b>Nossa Missão</b></h2>
        <p>
          A nossa missão é conscientizar sobre como o descarte correto pode
          influenciar positivamente na saúde do planeta. Guiando com informações
          sobre como reciclar, onde descartar, e os benefícios em direcionar os
          resíduos recicláveis. Queremos trazer praticidade, seja para você ou
          empresas que se interessam pela nossa causa.<br/><b>Seja Bem-Vindo(a)!</b>
        </p>
      </div>
      <div id="imagem">
        <img src="imgs/recicla.png" />
      </div>
  
      <div class="box">
        <h2 id="titulo"><b>Onde Descartar?</b></h2>
        <p>
          Reciclar nunca foi tão fácil!<br/>
          Nossa logisitica só oferece benefícios para quem recicla. Trabalhamos
          com empresas parceiras que coletam os resíduos recicláveis, seja em sua
          casa, condomínio ou empresa. <br> Disponibilziamos também pontos fixos de
          coleta.<br/>
          <b>Obrigado por fazer parte desta ação.</b>
        </p>
      </div>
    </div>


Instruções de acesso

- Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
- Descompacte o arquivo em uma pasta específica;
- Abra o Visual Studio Code e execute o Live Server;
- Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/home.html 

<h3> Tela de Login</h3>
A tela de login permite ao usuario fazer login no site, com a opçao de lembrar seu login/senha, tambem permite o usuário ser direcionado para a tela de cadastro através do link "Não possui conta?" e também há uma opçao de "Esqueci minha senha", aonde o usuário que esqueceu sua senha receberá um email para que o mesmo possa recupera-la.
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

<h3>Tela Locais de Coleta</h3>
     
![tela Locais de coleta](https://user-images.githubusercontent.com/101470892/168505416-961a1e26-156c-4f23-83ee-78ae81a79ad8.png)
    
Requisitos atendidos   

- RF02 GEOLOCALIZAÇÃO
- RF05 AGENDAMENTO DE COLETA

<h3>Atefatos da funcionalidade</h3>

● index.html

● style.css

<h3>Estrutura de dados</h3>

![image](https://user-images.githubusercontent.com/101470892/168506773-fbec8488-be00-400d-9912-161c709a8b95.png)








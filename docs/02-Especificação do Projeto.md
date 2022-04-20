# Especificações do Projeto

Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

| José da Silva      |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|**![](https://lh5.googleusercontent.com/jE99iyrjsZ-JBLc-I0Y6SsSMUpQLZOVBKNH_xYB9hMGyq2ziqSA_CLZWjW8yiE1RnRTQG5Pkgey40DDEIP8jhEnG4LIGzanrzpQc0oPiUT6bIk-TmCr0pfRT5xhyLxB_3QW0E5uo)**|**Idade:** 52 anos <br><br> **Ocupação:** Empresário, dono de um estabelecimento comercial que atua com vendas de produtos a granel e sem embalagens. |**Tipos de lixo produzido**: -Papel, Plástico, Papelão, Vidros, Orgânicos.|
|**Incentivos:**  Redução de impostos, Selo empresa sustentável, Economia.  |**Obstáculos:** Falta de informação, Falta de incentivo financeiro, Burocracia. |**Quantidade de pessoas/funcionários:** 4| 

| Maria Gomes        |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|**![](https://lh3.googleusercontent.com/idjh1Chmfl_jsmulAoX71OtV62ODlA8rFCrGPVOEyAKscfy6cmcTHJlFrtn8QS__9VMGhg3dUl1rALB07IjCA-8xEXVWER6fm7msYW-h0WPt_ItF4NgmWGylC2KNu0_mqdGIe2L3)**|**Idade:** 60 anos <br><br>  **Ocupação:** Engenheira aposentada, síndica de um condomínio de luxo com mais de 60 apartamentos. |**Tipos de lixo produzido**: -Orgânicos, Papel, Plástico, Papelão, Vidros.|
|**Incentivos:**  Redução do IPTU, Preservação do meio ambiente.  |**Obstáculos:** Falta de logística, Falta de informação |**Quantidade de pessoas/funcionários:** 180| 

| Marcio Santos      |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|**![](https://lh4.googleusercontent.com/jKePMYEcD6TGWaidQKK1_hue52hklkWGgyVpxGJe-mtcqk6tJjxQADQVXwMiJVhi_r9tmF186sVoA-htxE35xX0DcXgdkrNLhd7_zF8rDuyLddDheMEwrds8dehQjmg000Yp9GmE)**|**Idade:** 40 anos <br><br>  **Ocupação:** Advogado, dono de uma horta/sitio de orgânicos. |**Tipos de lixo produzido**:  Papel, Plástico, Vidros, Orgânicos.|
|**Incentivos:** <br> Reaproveitamento do lixo orgânico <br> em forma de adubo, Diminuir o acúmulo de lixo. |**Obstáculos:** Distância até o local de coleta, Transporte dos resíduos. |**Quantidade de pessoas/funcionários:** 12| 


## Histórias de Usuários


A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                            | PARA ... `MOTIVO/VALOR`                                         |
|--------------------|---------------------------------------------------------------|---------------------------------------------------------------- |
|José da Silva       | Solicitar coleta de lixo reciclável                           | Por não possuir meio adequado de transportar o lixo             |
|José da Silva       | Obter selo empresa sustentável                                | Melhorar a imagem da empresa e redução de impostos              |
|Maria Gomes         | Distribuir cestos seletivos para os moradores                 | Facilitar a separação dos resíduos recicláveis e não recicláveis|
| Maria Gomes        | Se informar sobre horários de coleta                          |  Ajudar na logística de reciclagem do condomínio               |
| Marcio Santos      | Se informar sobre técnicas de adubagem com materiais orgânicos| Diminuir os materiais orgânicos reaproveitando em forma de adubo| 
| Marcio Santos      | Manter um registro de quantidade de resíduos reciclados       |Para facilitar o controle do volume de lixo reciclado             |


## Requisitos


O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.


### Requisitos Funcionais


A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.
|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF01| O site deve apresentar na página principal os conteúdos referentes ao nome do site, serviços e os propósitos envolvidos no processo da reciclagem. | Alta |
|RF02| O site deve possuir a funcionalidade de geolocalização, assim como, um mapa com possíveis locais de coleta na região. | Média |
|RF03| O site deve apresentar uma página de histórico(log) de todas coletas e reciclagens realizadas. | Média |
|RF04| O site deve apresentar funcionalidade de login e cadastro de usuários. | Alta |
|RF05| O site deve permitir que o usuário solicite uma coleta de lixo reciclável. | Alta |
|RF06| O site deve conter uma tabela com horários de coleta de  lixo naquela região | Média |
|RF07| O site deve fornecer dicas e técnicas sobre como separar o lixo para destinar à reciclagem, assim como informações educativas sobre sustentabilidade.| Alta |
|RF08| O site deve direcionar informações sobre a venda de cestos seletivos. | Alta |
|RF09| O site deve informar os benefícios e requisitos para obtenção do selo verde. | Alta |   
|RF11| O site deve apresentar notícias atualizadas sobre reciclagem. | Alta |
|RF12| O usuário deve poder comentar as notícias. | Baixa | 


### Requisitos não Funcionaiss


|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface intuitiva e amigável | Média | 
|RNF-002| O site deve ser responsivo tanto em computadores quanto  em dispositivos móveis |  Baixa | 
|RNF-003| Compatibilidade com os principais navegadores do mercado (Google Chrome, Mozilla Firefox, Microsoft Edge) | Alta |



## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|**ID**| **Descrição**                                           |
|--|-------------------------------------------------------|
|RE01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022.|
|RE02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend.|

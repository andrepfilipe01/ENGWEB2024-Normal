EXERCÍCIO 1 -> 

EX 1.1 -> 

- O dataset dado não possui o _id necessário para a base de dados ser suportada no mongodb,logo alterei o Id que tinha no dataset e coloquei o _id
- Importado para o mongodb com o comando : mongoimport -d contratos -c contratos /tmp/contratos.json --jsonArray
- Importação ocorreu com sucesso pois : 
2024-05-16T13:20:15.195+0000    connected to: mongodb://localhost/
2024-05-16T13:20:16.475+0000    36377 document(s) imported successfully. 0 document(s) failed to import.


EX 1.2 -> 
Nesta questão antes de testar cada querie temos de fazer os seguintes comandos:
1º mongosh
2º show dbs 
3º use contratos


1.Quantos registos estão na base de dados;
R: db.contratos.countDocuments() ---> 36377

2. Quantos registos de contratos têm o tipo de procedimento com valor "Ajuste Direto Regime Geral"?
R:db.contratos.find({"tipoprocedimento":"Ajuste Direto Regime Geral"}).count() ---> 17067

3.  Qual a lista de entidades comunicantes (ordenada alfabeticamente e sem repetições)?
R:db.contratos.distinct("tipoprocedimento")

4.Qual a distribuição de contratos por tipo de procedimento (quantos contratos tem cada tipo de procedimento)?
R:db.contratos.aggregate([
  {
    $group: {
      _id: "$tipoprocedimento",
      count: { $sum: 1 }
    }
  }
])

5.Qual o montante global por entidade comunicante (somatório dos contratos associados a uma
entidade)?


EX 1.3 -> 

Na API de dados temos de fazer os seguintes comandos:
- Na criação da API temos de utilizar os seguintes comandos:
npx express-generator --view=pug ou npx express-generator
npm i 
npm i mongoose --save 
- Executar a API temos de utilizar o comando:
npm start

Construir a API de dados da seguinte forma:
1º Alterar a porta de entrada, para a porta pedida no enunciado(Ficheiro www da pasta bin)
2º Alterar a app.js para fazer a conexão com o mongodb 
3º Criar as pastas models e controllers ( Controllers contêm os controlos da bd e na pasta models contêm os Schemas da bd)
4º Criação do model: Possui os modelos dos objetos existentes na bd.
5º Criação do controller: Possui os controllers necessários para alterar os registos existentes na base de dados (Operações de CRUD)
6º Criação de routes criada por nós para acerdermos aos registos na bd, tal como aparece no enunciado
7º Teste das rotas criadas utilizando o browser e o Postman 


EXERCÍCIO 2 -> 

Na Interface temos de utilizar os seguintes comandos:
- Na criação da Interface temos de utilizar os seguintes comandos:
npx express-generator --view=pug 
npm i 
npm i axios --save 
- Executar a API temos de utilizar o comando:
npm start

Construir a Interface da seguinte forma:
1º Alterar a porta de entrada, para a porta pedida no enunciado(Ficheiro www da pasta bin)
3º Criação de routes pedidas no enunciado para serem utilizadas pelo utilizador
4º Criação das views utilizando o w3.css e o pug







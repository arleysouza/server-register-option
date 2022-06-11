## Back-end em NodeJS e ElephantSQL

### Aplicação

O SGBD está no ElephantSQL. Ele possui apenas a tabela `register` com os campos `id` (integer auto increment), `option` (varchar), `date` (datetime com valor default now).

A aplicação possui as seguintes rotas:
* `/register/create` do método `POST`: recebe uma string na propriedade `option` e adiciona um registro na tabela `register`;
* `/register/remove` do método `DELETE`: recebe um integer na propriedade `id` e remove o registro da tabela `register`;
* `/register/list` do método `GET`: retorna um array JSON com os registros da tabela `register`;
* `/register/count` do método `GET`: retorna um array JSON com as quantidades de cada valor do campo `option` da tabela `register`.




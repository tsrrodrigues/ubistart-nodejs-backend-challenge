<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Nest

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalação

```bash
$ npm install
```

## Como rodar

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
```
## License

[MIT licensed](LICENSE).
```
## Coleção Postman
```
Na pasta doc se encontra uma coleção de rotas do postman, para facilitar o teste da aplicação.
```

## Decisões tomadas
```
Segue algumas decisões tomadas durante o desenvolvimento do desafio técnico.

* Levando em consideração que esse foi um primeiro contato com o desenvolvimento do zero de uma API utilizando o framework NestJS, encontrei já um primeiro desafio de como dividir as camadas da api e como estruturar as pastas da melhor forma. Levando em consideração alguns comandos do Nest CLI, gerei dois resources (Usuário e Todo) e decidi que cada camada dos resources criados iriam se manter como foi estruturado pelo framework. Por exemplo, decidi não dividir as camadas, criando uma pasta para controllers, outra para modules e outra para services, em vez disso, resolvi deixar cada camada em seu respectivo módulo, assim cada módulo tem seu arquivo .module, .controller e .service.

* Outra decisão importante foi de utilizar query builder em algumas rotas. Gosto de desenvolver minhas próprias queries para comunicação com o banco, porém utlizei o typeorm já que vi uma forma mais recomendada pela documentação, mas em alguns pontos do desenvolvimento senti a necessidade de uma querie mais específica, então utilizei um caminho disponilizado pelo typeorm e optei pelos queries builders.

* Para armazenar a informação da data e hora de quando um todo foi finalizado, utilizei apenas o campo updated_at, pois já que não é possível editar um todo após ele ser finalizado, o campo updated_at já irá guardar a data de quando esse todo foi finalizado.
```

## Rotas
```
GET -> /
Health check da aplicação
```
```
POST -> /user
Criação de usuário.
Parâmetros:
  Body:
    email -> string
    password -> string
```

```
POST -> /auth/login
Login de usuário.
Parâmetros:
  Body:
    email -> string
    password -> string
```

```
POST -> /todo
Criação de Todo.
Parâmetros:
  Body:
    description -> string
    due_date -> string
```

```
PATCH -> /todo/:id
Edição de Todo.
Parâmetros:
  Body:
    description -> string -> não é obrigatório
    due_date -> string -> não é obrigatório
    status -> enum(pending, finished) -> não é obrigatório
```

```
GET -> /todo/user/:user_id
Listagem de Todos de um usuário.
```

```
GET -> /todo
Listagem de todos os Todos.
Parâmetros:
  Query:
    offset -> string -> parâmetro para a paginação que define quantos registros devem ser "pulados" na seleção -> não é obrigatório
    limit -> string -> parâmetro para a paginação que define quantos registros devem ser retornados na seleção -> não é obrigatório
    isLate -> enum(0, 1) -> filtro que define se os registros retornados devem ser apenas de todos atrasados ou não -> não é obrigatório
```

## Problemas Conhecidos
```
O desafio técnico está bem simples de se fazer, devido ao tempo e ao fato de que não pude me dedicar totalmente, existem alguns problemas que não foram resolvidos ou que não foram resolvidos da melhor forma, e alguns pontos que estavam no meu planejamento de desenvolvimento, porém não tive a chance de desenvolver. Segue a explicação de cada um:

* Tratamento de erros de validações de campos em rotas de criação de usuários e todos.
* Divisão de perfis e autorização de rotas por perfis de usuários.
* Relação entre Usuário e Todo não foi realizada da melhor forma segundo a documentação do Nest, pois encontrei dificuldades ao salvar a chave estrangeira do id do usuário na tabela de Todo, ao invés de criar a relação foi criado um campo manualmente para guardar o is do usuário na tabela de Todo.
* Falta da serialização dos dados do usuário.
* Falta de documentação SWAGGER das rotas da API.
* Falta de Diagramação da API.
* Falta de utilização do Docker.
* Falta de testes de unidade e de integração.
* É possível mover um todo de finalizado para pendente novamente, considerando que não é possível editar um todo após ele ser finalizado, imagino que não deve ser possível alterar o status dele para pendente depois de ser finalizado.
```

## Observação:
Agradeço a oportunidade me dada pela Ubistart, ressalto que eu não entregaria o projeto em seu estado atual se não fosse pela observação descrita no desafio técnico de que poderia enviar a solução incompleta. Ressalto novamente que o único motivo para o atraso da minha entrega foram motivos pessoais, sendo que o desafio e o prazo dado foram coerentes. No mais, agradeço.
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

## Instala????o

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
## Cole????o Postman
```
Na pasta doc se encontra uma cole????o de rotas do postman, para facilitar o teste da aplica????o.
```

## Decis??es tomadas
```
Segue algumas decis??es tomadas durante o desenvolvimento do desafio t??cnico.

* Levando em considera????o que esse foi um primeiro contato com o desenvolvimento do zero de uma API utilizando o framework NestJS, encontrei j?? um primeiro desafio de como dividir as camadas da api e como estruturar as pastas da melhor forma. Levando em considera????o alguns comandos do Nest CLI, gerei dois resources (Usu??rio e Todo) e decidi que cada camada dos resources criados iriam se manter como foi estruturado pelo framework. Por exemplo, decidi n??o dividir as camadas, criando uma pasta para controllers, outra para modules e outra para services, em vez disso, resolvi deixar cada camada em seu respectivo m??dulo, assim cada m??dulo tem seu arquivo .module, .controller e .service.

* Outra decis??o importante foi de utilizar query builder em algumas rotas. Gosto de desenvolver minhas pr??prias queries para comunica????o com o banco, por??m utlizei o typeorm j?? que vi uma forma mais recomendada pela documenta????o, mas em alguns pontos do desenvolvimento senti a necessidade de uma querie mais espec??fica, ent??o utilizei um caminho disponilizado pelo typeorm e optei pelos queries builders.

* Para armazenar a informa????o da data e hora de quando um todo foi finalizado, utilizei apenas o campo updated_at, pois j?? que n??o ?? poss??vel editar um todo ap??s ele ser finalizado, o campo updated_at j?? ir?? guardar a data de quando esse todo foi finalizado.
```

## Rotas
```
GET -> /
Health check da aplica????o
```
```
POST -> /user
Cria????o de usu??rio.
Par??metros:
  Body:
    email -> string
    password -> string
```

```
POST -> /auth/login
Login de usu??rio.
Par??metros:
  Body:
    email -> string
    password -> string
```

```
POST -> /todo
Cria????o de Todo.
Par??metros:
  Body:
    description -> string
    due_date -> string
```

```
PATCH -> /todo/:id
Edi????o de Todo.
Par??metros:
  Body:
    description -> string -> n??o ?? obrigat??rio
    due_date -> string -> n??o ?? obrigat??rio
    status -> enum(pending, finished) -> n??o ?? obrigat??rio
```

```
GET -> /todo/user/:user_id
Listagem de Todos de um usu??rio.
```

```
GET -> /todo
Listagem de todos os Todos.
Par??metros:
  Query:
    offset -> string -> par??metro para a pagina????o que define quantos registros devem ser "pulados" na sele????o -> n??o ?? obrigat??rio
    limit -> string -> par??metro para a pagina????o que define quantos registros devem ser retornados na sele????o -> n??o ?? obrigat??rio
    isLate -> enum(0, 1) -> filtro que define se os registros retornados devem ser apenas de todos atrasados ou n??o -> n??o ?? obrigat??rio
```

## Problemas Conhecidos
```
O desafio t??cnico est?? bem simples de se fazer, devido ao tempo e ao fato de que n??o pude me dedicar totalmente, existem alguns problemas que n??o foram resolvidos ou que n??o foram resolvidos da melhor forma, e alguns pontos que estavam no meu planejamento de desenvolvimento, por??m n??o tive a chance de desenvolver. Segue a explica????o de cada um:

* Tratamento de erros de valida????es de campos em rotas de cria????o de usu??rios e todos.
* Divis??o de perfis e autoriza????o de rotas por perfis de usu??rios.
* Rela????o entre Usu??rio e Todo n??o foi realizada da melhor forma segundo a documenta????o do Nest, pois encontrei dificuldades ao salvar a chave estrangeira do id do usu??rio na tabela de Todo, ao inv??s de criar a rela????o foi criado um campo manualmente para guardar o is do usu??rio na tabela de Todo.
* Falta da serializa????o dos dados do usu??rio.
* Falta de documenta????o SWAGGER das rotas da API.
* Falta de Diagrama????o da API.
* Falta de utiliza????o do Docker.
* Falta de testes de unidade e de integra????o.
* ?? poss??vel mover um todo de finalizado para pendente novamente, considerando que n??o ?? poss??vel editar um todo ap??s ele ser finalizado, imagino que n??o deve ser poss??vel alterar o status dele para pendente depois de ser finalizado.
```

## Observa????o:
Agrade??o a oportunidade me dada pela Ubistart, ressalto que eu n??o entregaria o projeto em seu estado atual se n??o fosse pela observa????o descrita no desafio t??cnico de que poderia enviar a solu????o incompleta. Ressalto novamente que o ??nico motivo para o atraso da minha entrega foram motivos pessoais, sendo que o desafio e o prazo dado foram coerentes. No mais, agrade??o.

# Register-API

Sistema de gerenciamento de registro de ponto.

Com o crescente numero de vagas com modalidade home office, o sistema é utilizado para controle dos horários dos funcionários.

### Stack utilizada:
- NodeJS.
- Grapqhl.
- Apollo-server.
- Typeorm.
- Typescript.
- Autenticação por JWT integrado com a API.
- Persistência de dados utilizando MySQL.

## Instalação Banco
O banco de dados dessa aplicação foi criado utilizando um container docker, para utilização é necessário ter o [Docker](https://docs.docker.com/desktop/) instalado e assim podemos rodar no terminal o comando(certifique-se que o Docker está rodando):

```bash
docker pull mysql/mysql-server:5.7
```
```bash
docker run --name register -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_DATABASE=register -p 3306:3306 -d mysql/mysql-server:5.7
```
Tudo deve estar rodando, caso queira testar:
```bash
docker container ls
```

Ou você pode utilizar seu banco local já instalado em sua máquina, para isso basta alterar as variáveis de conexão comentadas no arquivo **config/typeorm.ts**.

## Instalação

Clone este repositório:

```bash
git clone https://github.com/Andrei-Majada/Register.git
```

No diretório de origem abra o terminal e execute:
```bash
npm i
```
E depois deve remover o ".example" do arquivo ".env.example", as variáveis de ambiente já constam neste arquivo.

agora basta rodar o comando:
```bash
npm run dev
```
As informações de conexão com o banco já constam na aplicação.

## Documentação
A API está documentada através dos schemas, que também pode ser visualizada através do Apollo-Studio, basta ir no seu navegador e colocar:
```bash
localhost:4000/api
```
O meu servidor está rodando na porta 4000,  mas isso pode ser alterado pelo .env.

## Exemplos de Queries e Mutation

No Navegador podemos utilizar o localhost:4000/api e ele nos levara ao apollo studio, basta acessar para poder rodar suas queries.

E preciso fazer a criação de um usuário admin e um usuário employee para realizar os testes no front-end. Ambas as queries são iguais mudando somente a role do usuário, que pode ser "*admin*" ou "*employee*".

Exemplo de mutation- **criação admin**:

```bash
mutation CreateUser($name: String!, $password: String!, $role: String!, $email: String!) {
  createUser(name: $name, password: $password, role: $role, email: $email) {
    id
    name
    email
    password
    role
    createdAt
  }
}
```

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQFUBnBCgCgBIldF0SBlFCgkgDmAQgA0JVgAdc9egHcIFMNz4Dh4yRQgAbBKv6DRE1gji4COg%2BtEBKEsAA6FR6RJQqNBk2YcukvwQJGTlFZW5pWQUlMAltPQj4oJIzCytJVMt7Jxc3EhICMGdXfPzA4ryU80sK0pIQ6OVa0qTm-I9qFAQwAEEUZoBfCoGQMRAAN1wBXAAjPXoMEBySkkcQcoxVkAArCABjiBJ6S0m1sWa1hrCizbWu%2Bi6ARgAmAGYzi5BW25BcMDhBB9cvk1pkdGtuGtdgcAAJCao6AB0UAgcDWwwqIAGQA) para exemplo da mutation com as variáveis.

Exemplo de mutation- **criação employee**:

```bash
mutation CreateUser($name: String!, $password: String!, $role: String!, $email: String!) {
  createUser(name: $name, password: $password, role: $role, email: $email) {
    id
    name
    email
    password
    role
    createdAt
  }
}
```

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQFUBnBCgCgBIldF0SBlFCgkgDmAQgA0JVgAdc9egHcIFMNz4Dh4yRQgAbBKv6DRE1gji4COg%2BtEBKEsAA6FR6RJQqNBk2YcukvwQJGTlFZW5pWQUlMAltPQj4oJIzCytJVMt7Jxc3EhICMGdXfPzA4ryU80sK0pIQ6OVa0qTm-I9qFAQwAEEUZoBfCoGQMRAAN1wBXAAjPXoMEBySkkcQcoxVrCnBXBJ6S0m1sWa1hrCizbWu%2Bi6ARgAmAGZj05BWq5AzKR0IAE8EAhXrl8mtMjo1tw1uZ1LgAAJCao6AB0UAgcDWwwqIAGQA) para exemplo da mutation com as variáveis.

Exemplo de mutation- **login**:

```bash
mutation  Login($email:  String, $password:  String)  {
	login(email:  $email, password:  $password)  {
	name
	email
	role
	token
	}
}
```

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIAZCAcwKQAoASBOXAgG3RIGUUAnGygDQl6AB1wBncQHcIPMB258klAJQlgAHR4bSJVlRq0mLdsONshYyTLkdRE6bLBrN23SRJJciLTo8fzVl93Eh4IVgRg-xIUCABrZCiSAF9g5JABEAA3XD5cACMI8QwQVz8SDRArRzlKjkqUBHFGgEYAJgBmSoEkysC6iqxcmlwAAUpmNgA6KAg4SrTgkGSgA) para exemplo da mutation com as variáveis.

Exemplo de mutation- **criar registro** (somente para *employee*):

```bash
mutation  CreateRegister($timeRegistered:  String!)  {
	createRegister(timeRegistered:  $timeRegistered)  {
	id
	userId
	username
	timeRegistered
	}
}
```
É necessário passar o Bearer token pelo header Authorization assim como no exemplo abaixo.

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4RxighigSwiQAIBhAJwXwQCUEBzAgZxQQoAoASQxep1uwRh0JAMooKBJAwCEAShLAAOhWWkSUKjX4s2nXnUZ6hIkjwJ9jgqmEUq1GkiQJhV6585jN2ASTeOniTe7Ei4iO5OJIa6NsKRzgC%2BkYkgADQgAG64UrgARgA2CMwYIA4eJMogMdb68RiVIACMAGwALAAMLU0AHABMPU1VKekgABbUYOwlmCogAII4YxBSAF74REhV6FUAQtRUFCQIAJ4AUmN5AOJQBADyBGe%2BAKqrvk0AcgS%2BzL5ItABWKBkXwtXwAawADgANABqZDOAE4AHSnM6QgBaIJaXwA7gQ8nAAGIoDFiUG%2BOBNMZQOAFGAATTEu3WAHUAB59Jk-SmwlAM1kFX4AKwgBNZRJOuFZALGAEUrmB%2BYLmAAZOAfTJ5cm-JBnLVXZ73R4FPLQ3bMPIAZgKBTJPLpYzA2IAsgAVBkdF0AEQZ7Lu3oAouyXSd8RjoWNcb5ReyPsK5bj43K%2Bnc3YHVgAzOXIrqwsbMAoA1nPCgtAGrebswMfN27DGZZgACQICA6eTIuDdTStAFoxN6CLjhezYeDaD0qqlEkA) para exemplo da mutation com as variáveis.

Exemplo de query- **buscar registros de todos usuários** (somente para *admin*):

```bash
query  ListAdminRegister  {
	listAdminRegister  {
	id
	userId
	username
	timeRegistered
	}
}
```
É necessário passar o Bearer token pelo header Authorization assim como no exemplo abaixo.

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICWAzigIJhxlIBKCA5pSvkcADp7dJEiAG3a16TVu048%2BAwUTJhe-eURgV8ASSWzV6-EgCGiZXMEoyiZmyr4EOlUQC%2BppyAA0IAG6G8ZQwBGQggUGCAeIAAWCIZg%2BKGYPCDUMCiREH4AXoYWEEjcGAUAQjF4nAgEAFKRAQDiUGQA8mSVmgCqmZoAjAByZJoUmkwArFAAwpoAbJoA1gAOABoAamOVAJwAdBWVcwBaE5MAsmQA7mQBcABiKLsAylOacD2RUHBrgwASPV5gC3ORmlOZF2AHUupFDCCzs1KgArACaC0qXgCAFEikgAiDLnMAmNhrCAgAmAAMZBIqwIxIAHkJNLCIGR4SDGChIQAWcmrOaIgCKTVhqKJPQAItQiYcACosLqNSWowZwJbs8ZTKXwkmHEUanqZQ7DQ4LEkbElISIi9lYHq3EHsto9IoglAAM15lSJsNq1MyXS8EF5tVRKDxAGkECSPkIALRRybskPUApuJxAA) para exemplo da query com as variáveis.

Exemplo de query- **buscar registros do usuário após autenticação** (somente para *employee*):

```bash
query  ListEmployeeRegister  {
	listEmployeeRegister  {
	id
	userId
	username
	timeRegistered
	}
}
```
É necessário passar o Bearer token pelo header Authorization assim como no exemplo abaixo.

[link](https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fapi&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICWAzigKJwAOANhAQggEoIDmlK%2BRwAHTwCkRIgx61GzVh25U%2Bg4aLFEyYISNVEYFfAEkNy7bvxIAhok0qxKMojk98CI1qIBfa%2B5AAaEADdzPDJzACMGBAoMEF8QAAsEczB8KMxBEABBGBQ4iGCAL3M7CCQBDDKAIUS8PgQCACk40IBxKDIAeTJ6-QBVfP0ARgA5Mn0KfSQ2AFYoAGF9ADZ9AGs6AA0ANVn6gE4AOjr6ugAteYWRgHcyULgAMRRjgGVF-TgBuKg4BhgATUeKwoAdQAHgAmP5jV4bFA-QEMcYAKwg10BtwI5kBUziAEVmmAYXCKCQ4EN-KFnuMkPUyc0eh0ugxQmsKhRQgBmBgMJ6Qr5xMBnACyABUfgAGAUAER%2BwPaEuowIFBCuxzWcQu%2BiRwKGCOxF212NB7SF1HyADNsXtRQsNnEKAwpoCengFlN8hlgdQhkKKsd-BQABJkBCi0KzcxCgZsgC0jwlZAuCOBG2WbAAHGVvO4gA) para exemplo da query com as variáveis.

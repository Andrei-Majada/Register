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
o banco de dados dessa aplicação foi criado utilizando um container docker, para utilização é necessário ter o [Docker](https://docs.docker.com/desktop/) instalado e assim podemos rodar no terminal o comando(certifique-se que o Docker está rodando):

```bash
docker pull mysql/mysql-server:5.7
```
```bash
docker run --name register -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_DATABASE=register -p 3306:3306 -d mysql/mysql-server:5.7
```
tudo deve estar rodando, caso queira testar:
```bash
docker container ls
```

## Instalação

Clone este repositório:

```bash
git clone https://github.com/Andrei-Majada/Register.git
```

no diretório de origem abra o terminal e execute:
```bash
npm i
```
e depois:
```bash
npm run dev
```
	> As informações de conexão com o banco já constam na aplicação.

## Documentação
A API está documentada através dos schemas, que tambem pode ser visualizada através do Apollo-Studio, basta ir no seu navegador e colocar:
```bash
localhost:4000/api
```

o meu servidor está rodando na porta 4000,  mas isso pode ser alterado pelo .env.

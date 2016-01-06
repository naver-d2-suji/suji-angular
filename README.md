# SUJI
> 소상공인들이 수지 맞기를 기원하는 웹 기반 오픈소스 POS 시스템

&nbsp;

## Development Stack
> 개발 언어 및 스택 소개

- Language : Javascript
- Framework : [Node.js](https://nodejs.org/), [Express](http://expressjs.com/)
- Use Modules : async, should, supertest, mocha, jQuery
- Server : [DigitalOcean](https://www.digitalocean.com/), [nginX](http://nginx.org/)
- Database : MariaDB
- Build & Test Tool : [Grunt](www.gruntjs.com/), [Travis CI](https://www.travis-ci.org/)

## REST API
> REST API Definition

| Feature |	Method	| Request URL | Todo Status |
| :------------ |	:-------:	| :-----------------| :--------: |
| 회원가입 |	POST	| /api/v1.1/user/register | complete |
| 로그인 |	GET	| /api/v1.1/user/login | complete |

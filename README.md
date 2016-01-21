

# SUJI [![Build Status](https://travis-ci.org/naver-d2-suji/suji.svg)](https://travis-ci.org/naver-d2-suji/suji)
> 소상공인들이 수지 맞기를 기원하는 웹 기반 오픈소스 POS 시스템
![SUJI](https://cloud.githubusercontent.com/assets/7614353/12139794/1329ce44-b4a6-11e5-90a2-dd51d039e01d.png)
- [**소개 영상**](https://youtu.be/fMRXjG3Plu8)
&nbsp;

## Development Stack
> 개발 언어 및 스택 소개

- Language : Javascript
- Framework : [Node.js](https://nodejs.org/), [Express](http://expressjs.com/)
- Use Modules : async, should, supertest, mocha, crypto, jQuery
- Server : [DigitalOcean](https://www.digitalocean.com/), [nginX](http://nginx.org/)
- Database : MariaDB
- Build & Test Tool : [Grunt](http://gruntjs.com/), [Travis CI](https://travis-ci.com/)


&nbsp;
## Getting Started
### Prerequisites
- `Node.js` and `npm` should be installed
- `Grunt` should be installed
```shell
npm install --global grunt
```
- MariaDB should be installed(v10 or more recent). If not pre-installed, check the following instrution here : [Install MariaDB](https://www.vultr.com/docs/install-mariadb-on-ubuntu-14-04)

### Quick Start
- [Download the latest version](https://github.com/naver-d2-suji/suji/archive/develop.zip)
- Install with npm :
```shell
 npm install
```
- Run the program :
```shell
 grunt serve
```

&nbsp;
## REST API
> REST API Definition

| Feature |	Method	| Request URL | Todo Status |
| :------------ |	:-------:	| :-----------------| :--------: |
| 회원가입 |	POST	| /api/v1.1/user/register | complete |
| 로그인 |	GET	| /api/v1.1/user/login | complete |
| 카테고리 목록 |	GET	| /api/v1.1/category | complete |
| 카테고리 추가 |	POST	| /api/v1.1/category/insert | complete |
| 카테고리별 메뉴 목록 |	GET	| /api/v1.1/menu/:category | complete |
| 메뉴 목록 |	GET	| /api/v1.1/menu | complete |
| 메뉴 추가 |	POST	| /api/v1.1/menu/insert | complete |
| 메뉴 삭제 |	POST	| /api/v1.1/menu/delete | complete |
| 구매 목록 |	GET	| /api/v1.1/purchase | complete |
| 구매 리스트 추가 |	POST	| /api/v1.1/purchase/add | complete |
| 구매 리스트 삭제 |	POST	| /api/v1.1/purchase/delete | complete |
| 일별 매출 현황 |	GET	| /api/v1.2/stats/daily | complete |
| 직원 목록 보기 |	GET	| /api/v1.2/employee | complete |
| 직원 추가 |	POST	| /api/v1.2/employee/insert | complete |
| 직원 삭제 |	DELETE	| /api/v1.2/employee/delete | complete |
| 직원 추가 |	UPDATE	| /api/v1.2/employee/update | complete |


&nbsp;
## 사용한 오픈소스 이름과 홈페이지 목록
- client/modules 폴더 내부의 기능들은 아래의 소스코드를 참고했습니다.
 - [Point of Sale Interface using AngularJS](http://codepen.io/fatihbs/pen/HufEx)
 - [AngularJS Basic HTTP Authentication](https://github.com/cornflourblue/angular-authentication-example)
- 그 외 폴더는 직접 작성한 코드입니다.




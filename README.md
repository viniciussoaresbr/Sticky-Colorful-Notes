<h1 align="center">Sticky Colorful Notes</h1>

<img src="https://user-images.githubusercontent.com/85377319/176077277-04888a32-4d85-491a-a25b-e7337ca8499b.png" />
<img src="https://user-images.githubusercontent.com/85377319/176085474-749656fa-cacb-409e-b299-3f0b477d5b46.png" />

<h2>Instruções para rodar o projeto em sua máquina</h2>

Verifique se o `node.js v14+` está instalado.

<h3>Front-end :</h3>

Clone o repositório sticky-colorful-notes :

```
git clone https://github.com/viniciussoaresbr/sticky-colorful-notes.git
```

Instale as dependências utilizando yarn ou npm :

```
npm i || yarn
```

Crie um arquivo .env na pasta raiz do projeto com a variável de ambiente :

```
REACT_APP_BASE_URL=http://localhost:3001
```

Logo após instalar as dependências inicie o projeto :

```
npm start || yarn start
```

<h3>Back-end :</h3>

Clone o repositório scn-api :

```
git clone https://github.com/viniciussoaresbr/scn-api.git
```

Instale as dependências utilizando o npm :

```
npm i
```

Instale o MongoDB na sua máquina local :

https://www.mongodb.com/try/download/community

Instale o NoSqlBooster para acessar e gerenciar o banco local :

https://nosqlbooster.com/downloads

Crie uma conexão no NoSqlBooster :

<img src="https://user-images.githubusercontent.com/85377319/176083757-0428970b-8216-46ce-8208-81fe9bcdeee5.png" />

Utilize o atalho Alt + N para criar um banco com o nome scn_db

Crie um arquivo .env na pasta raiz do projeto com a variável de ambiente :

```
DB_CONNECTION=mongodb://localhost/scn_db
```

Depois de instalar as dependências , criar a variável de ambiente e o banco inicie a api :

```
npm run dev
```

<b>OBS:</b> Verifique no terminal da api se apresenta a seguinte mensagem no console : connected to DB!

# Fila Online

## Instruções para Instalação

#### Para realizar a instalação é necessário fazer o download do repositório do projeto, utilizando o comando abaixo:  
`$ git clone https://github.com/JaySaints/gefem_fila_espera.git  `  
ou   
`Realize o download do arquivo .ZIP`

#### Após realizar o download entre na pasta do projeto `gefem_fila_espera`  
`cd gefem_fila_espera`

#### Dentro do projeto irá ter duas pastas: 
    client  
    server
    
A pasta `client` é onde se encontra o *frontend* da aplicação. Já a pasta `server` é a *API*/*backend* da aplicação.

#### Agora é hora de instalar os módulos e dependências da aplicação:

Entre na pasta `client`  
`$ cd client`  

Use o seguinte comando para realizar a instalação  
`$ npm install`  

Retorne a pasta raiz do projeto   
`$ cd ..`  

Entre na pasta `server`  
`$ cd serve`

Instale os módulos  
`$ npm install`

Após realizar a instalação dos módulos, ainda dentro da pasta `serve` crie um arquivo com o seguinte nome `.env` para armazenar as variáveis de ambiente. Dentro do arquivo `.env` crie uma variável chamada `TOKEN_BOT=`. Está variável irá receber o token do *Bot* Telegram que foi gerado na criação do *bot*.

Acesse o link e siga a instruções do Telegram para criar um novo *Bot*  
[Telegram Bot](https://core.telegram.org/bots)

Dentro da pasta `server` acesse a seguinte pasta `src->config`  
`$ cd src/config`  

Dentro do diretório `config` execute o arquivo `generateKeypair.js` para gerar um novo par de chaves `rsa.pem`  
`$ node generateKeypair.js`

###### Depois da execução do comando acima foi gerado dois arquivos com a extenção `.pem`:  
    id_rsa_priv.pem  
    id_rsa_pub.pem  

#### Dependencias Instaladas e Configuradas
Feito os procedimentos acima agora é possível dar um *start* na aplicação. Para isso precisamos abrir dois terminais, um terminal dentro da pasta `server` e um terminal dentro da pasta `client`. Feito isto agora é só executar o comando `$ npm run serve` dentro de cada terminal.

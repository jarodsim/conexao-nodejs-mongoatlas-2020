const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()


//aqui vai a URI de sua conexão(que você pega no mongo atlas)
const uri = '|SUA URI AQUI|'


//iniciando servidor
app.listen(3000, () => {
    console.log('Rodando na porta 3000')
    //colocamos aqui dentro do listen, para poder fazer a conexão com banco de dados assim que iniciarmos o nosso servidor
    MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, response) => {
        if (err) throw err
        console.log('Conectado') //retorna um 'conectado' no console caso a conexão dê certo
    })
})
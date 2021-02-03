const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const buscaCep = require('./src/functions/buscaCep.js');

//config pra não dar erro ao enviar o formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
//declara uso do ejs
app.set('view engine', 'ejs');
//apresenta ao express onde está a pasta views
app.set('views', './src/views');

//renderizando página principal
app.get('/', (req, res) =>{
    //chama o arquivo da view
    res.render('index')
})

// obtem os dados da minha view
app.post('/envia-cep', async (req,res) => {
    const { siglaestado } = req.body
    const { estado } = req.body
    const { nomedarua } = req.body
    const resultado = await buscaCep(siglaestado, estado, nomedarua)
    
    res.render('resultado', {dado: resultado})
})


app.listen(3333);
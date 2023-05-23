const express = require("express")
const router = express.Router()

const conectaBancoDeDados = require('./bancoDeDados')// ligando ao arquivo banco de dados
conectaBancoDeDados()//chamando a função que conecta banco de dados
const Mulher = require('./mulherModel')
const { default: clsx } = require("clsx")

const app = express()
app.use(express.json())
const porta = 3333


async function mostraMulheres( request, response) {
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()
        response.json(mulheresVindasDoBancoDeDados)
    }catch(erro) {
        console.log(erro)

    }
}

//POST
async function criaMulher(request, response){
    const novaMulher = new Mulher( {
        nome: request.body.nome,
        imagem: request.body.imagem,
        citacao: request.body.citacao,
        minibio: request.body.minibio
        
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
    console.log(erro)
}}

//PATCH
async function corrigeMulher(request,response){

    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
                
        if ( request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }

        if ( request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }

        if ( request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }
        if (request.body.citacao){
            mulherEncontrada = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaMulher(request, response){
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Mulher deletada com sucesso!'})
    } catch (error) {
        console.log(error)
        
    } 
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))//config rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) //config rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // config rota PATCH / mulheres
app.use(router.delete('/mulheres/:id', deletaMulher))// config rota DELETE
app.listen(porta, mostraPorta)  //servidor ouvindo a porta
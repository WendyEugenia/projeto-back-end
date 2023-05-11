
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher( request, response){
    response.json({
        nome: 'Wendy Eugenia',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQGi4vBU4xkFBA/profile-displayphoto-shrink_200_200/0/1655071521109?e=1689206400&v=beta&t=Qv1Ks05i20VTqFzvhPQZDW4G_QscRaoFvTVH7GhYAQs',
        minibio: 'Estudante de Programação'

    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)


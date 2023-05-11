const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:  'Wendy Eugenia',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQGi4vBU4xkFBA/profile-displayphoto-shrink_200_200/0/1655071521109?e=1689206400&v=beta&t=Qv1Ks05i20VTqFzvhPQZDW4G_QscRaoFvTVH7GhYAQs',
        minibio: 'Estudante de Programação'
    },
    {
        nome: 'Iana Chan',
        imagem: ' https://pbs.twimg.com/profile_images/1420905428452524037/DURvAmKN_400x400.jpg',
        minibio: 'Fundadora Programaria '
    },    
    {
        nome: 'Nina da hora',
        imagem: 'https://lupadobem.com/wp-content/uploads/2021/11/IMG-20211122-WA0031.jpg',
        minibio: ' Hacker antirracista'
    }

]

function mostraMulheres( request, response){
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
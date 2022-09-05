import express, { Request, Response, NextFunction } from 'express'

const PORT = 3000
const app = express()

app.use(express.json())

function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

app.get('/', (req, res) => {

    return res.send(`New server runing on PORT: ${PORT}`)

})

app.post('/api/produtos', (req, res) => {

    console.log(req.body)

    return res.send('Produto adcionado!')

})

app.all('/api/produtos/check', (req, res) => {

    if (req.method === "POST") {
        return res.send('Inseriu algum registro')
    } else if (req.method === "GET") {
        return res.send('Leu algum registro')
    } else {
        return res.send('Não podemos realizar essa operação')
    }

})

app.get('/api/interfaces', (req: Request, res: Response) => {

    return res.send('Utilizando as interfaces')

})

app.get('/api/json', (req: Request, res: Response) => {

    return res.json({

        name: "Carro",
        price: 30.0,
        color: "Blue",
        size: ["M", "M", "G"]

    })

})

app.get("/api/produto/:id", (req: Request, res: Response) => {

    console.log(req.params)
    const id = req.params.id

    if (id === "1") {

        const product = {
            id: 1,
            name: "Camisa",
            price: 10
        }

        return res.json(product)

    } else {
        return res.send('Produto não enccontrado')
    }


})

app.get('/api/produtos/:produtoId/review/:reviewId', (req: Request, res: Response) => {

    console.log(req.params)

    const produtoId = req.params.produtoId
    const reviewId = req.params.reviewId

    return res.send(`Acessando a review ${reviewId} do produto ${produtoId}`)

})

app.get('/api/user/:id', getUser)

function getUser(req: Request, res: Response) {

    console.log(`Resgantando o usuário com o Id: ${req.params.id}`)

    return res.send('O usuário foi encontrado')

}

app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
    return res.json({ msg: 'Bem-vindo a área admnistrativa' })
})

function checkUser(req: Request, res: Response, next: NextFunction) {

    if (req.params.id === "1") {
        console.log("Pode seguir")
        next()
    } else {
        console.log('Acesso restrito')
    }

}

app.get('/api/user/:id/details/:name',(req: Request<{ id: string, name: string }>, res: Response<{ status: boolean }>) => {

        console.log(`Id: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)

        return res.json({
            status: true
        })
    }

)



app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})
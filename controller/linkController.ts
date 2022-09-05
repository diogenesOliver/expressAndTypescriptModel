import express, { Request, Response, NextFunction } from 'express'

function returningAMessage(req: Request, res: Response){
    return res.send(`Server Running with Express and TypScript`)
}

function creatingAPOSTRoute(req: Request, res: Response){

    console.log(req.body)

    return res.send('Produto adcionado!')

}

function allKindsOfRoutes(req: Request, res: Response){

    if (req.method === "POST") {
        return res.send('Inseriu algum registro')
    } else if (req.method === "GET") {
        return res.send('Leu algum registro')
    } else {
        return res.send('Não podemos realizar essa operação')
    }

}

function readingAJson(req: Request, res: Response){

    return res.json({

        name: "Carro",
        price: 30.0,
        color: "Blue",
        size: ["M", "M", "G"]

    })

}

function dynamicURL(req: Request, res: Response){

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

}

function gettingValuesFromURL(req: Request, res: Response){
    console.log(req.params)

    const produtoId = req.params.produtoId
    const reviewId = req.params.reviewId

    return res.send(`Acessando a review ${reviewId} do produto ${produtoId}`)
}

function getUser(req: Request, res: Response) {

    console.log(`Resgantando o usuário com o Id: ${req.params.id}`)

    return res.send('O usuário foi encontrado')

}

export default { 
    returningAMessage,
    creatingAPOSTRoute,
    allKindsOfRoutes,
    readingAJson,
    dynamicURL,
    gettingValuesFromURL,
    getUser
}
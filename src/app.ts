import express, { Request, Response, NextFunction } from 'express'

import functionsController from '../controller/linkController'
import middlewareFunctions from '../middlewares/middleware'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(middlewareFunctions.showPath)

app.get('/', functionsController.returningAMessage)

app.post('/api/produtos', functionsController.creatingAPOSTRoute)

app.all('/api/produtos/check', functionsController.allKindsOfRoutes)

app.get('/api/json', functionsController.readingAJson)

app.get("/api/produto/:id", functionsController.dynamicURL)

app.get('/api/produtos/:produtoId/review/:reviewId', functionsController.gettingValuesFromURL)

app.get('/api/user/:id', functionsController.getUser)

app.get('/api/user/:id/access', middlewareFunctions.checkUser, (req: Request, res: Response) => {
    return res.json({ msg: 'Bem-vindo a área admnistrativa' })
})

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
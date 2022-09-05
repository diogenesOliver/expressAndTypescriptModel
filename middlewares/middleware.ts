import express, { Request, Response, NextFunction } from 'express'

function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

function checkUser(req: Request, res: Response, next: NextFunction) {

    if (req.params.id === "1") {
        console.log("Pode seguir")
        next()
    } else {
        console.log('Acesso restrito')
    }

}

export default { showPath, checkUser }
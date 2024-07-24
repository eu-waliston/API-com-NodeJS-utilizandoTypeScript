import express from "express"
import Item from "../models/item"
import itensRepository from "../repositories/itens-repository"

const itemRouter = express.Router()

itemRouter.get("/itens", (req, res) => {
    itensRepository.lerTodos((itens) => res.json(itens))
})

itemRouter.get("/itens/:id", (req, res) => {
    const id: number = +req.params.id
    itensRepository.ler(id, (item) => {
        if (item) {
            res.json(item)
        } else {
            res.status(404).send()
        }
    })
})

itemRouter.post("/itens", (req, res) => {
    const item = req.body
    //TODO - criar e salvar novo item
    //const id = 123
    //res.status(201).location(`/itens/${id}`).send() 

    itensRepository.criar(item, (id) => {
        if (id) {
            res.status(201).location(`/itens/${id}`).send
        } else {
            res.status(400).send()
        }
    })
})

itemRouter.put("/itens/:id", (req, res) => {
    const id: number = +req.params.id
    itensRepository.atualizar(id,req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

itemRouter.delete("/item/:id", (req, res) => {
    const id: number = +req.params.id
    itensRepository.apagar(id, (notFound) => {
        if(notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

export default itemRouter
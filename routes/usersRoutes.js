const { request } = require("express")
const express = require("express")
const usersRoutes = express.Router()
const User = require("../model/User")

usersRoutes.post("/user", async (req,res) => {
    const {name, email} = req.body
    const user = {
        name,
        email
    }
    try {
        await User.create(user)
        res.status(201).json({message: "Usuário criado com sucesso"})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

usersRoutes.get("/user", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

usersRoutes.get("/user/:id", async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findOne({_id: id})

        if(!user) {
            res.status(422).json({message: "Usuário não encontrado"})
            return
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: error})
    }
} )

usersRoutes.patch("/user/:id", async (req, res) => {
    const id = req.params.id
    const {name,email} = req.body

    const user = {
        name,
        email
    }
    try {
        const userUpadated = await User.updateOne({_id: id}, user)

        if(userUpadated.matchedCount === 0) {
            res.status(500).json({message: "Usuário não encontrado"})
            return
        }
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: error})
    }    
})

usersRoutes.delete("/user/:id", async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({_id:id})
    if(!user) {
        res.status(422).json({message: "Usuário não encontrado"})
        return
    }
    try {
        await User.deleteOne({_id: id})
        res.status(200).json({message: "Usuário deletado com sucesso"})
    } catch (error) {
        res.status(500).json({error: error})        
    }
})

module.exports = usersRoutes
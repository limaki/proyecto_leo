const express = require('express');
const router = express.Router();
const users = require('../model/Users.js');

router.get("/usuarios", async (req,res)=>{

    try{

        const usersTodos = await users.find();

        if(usersTodos.length){
            res.status(200).send(usersTodos)
        }
        else{
            res.status(200).send('No hay usuarios, lo sentimos')
        }
    }
    catch(err){
        res.status(500).send('Hay un problema');
    }

    
})
router.get("/usuarios/:id", async (req,res)=>{

    try{

        const usuario = await users.findById(req.params.id);

            res.status(200).send(usuario.nombre, usuario.apellido, usuario.email, usuario.favoritos)
     
    }
    catch(err){
        res.status(500).send('Hay un problema');
    }

    
})
router.put("/usuarios/:id", async(req,res)=>{
    try{
        await users.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).send('usuario editado')
    }
    catch(err){
        res.status(500).send('algo andubo mal')
    }
})
router.post("/usuarios", async(req, res)=>{
    try{
        await users.create(req.body)
        res.status(201).send('usuario creado!');
    }
    catch(err){
        res.status(500).send('error al crear usuario')
    }
})

module.exports = router
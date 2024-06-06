const express = require('express');
const router = express.Router();
const albums = require('../model/Albums.js');

router.get("/albums", async (req,res)=>{

    try{

        const albumsTodos = await albums.find();

        if(albumsTodos.length){
            res.status(200).send(albumsTodos)
        }
        else{
            res.status(200).send('No hay albums, lo sentimos')
        }
    }
    catch(err){
        res.status(500).send('Hay un problema');
    }

    
})

// router.get('/albums/:nombre', async (req, res)=>{

//     try{
//         const albumId = await albums.findById({nombre:req.params.nombre});

//         if (albumId.length){
//             res.status(200).send(albumId)
//         }
//         else{
//             res.status(200).send('no se encuentra ese album')
//         }
//     }
//     catch(err){
//         res.status(500).send('hay un problema al agregar album')
//     }
// })

router.get('/albums/:id', async (req, res)=>{

         try{
             const albumId = await albums.findById(req.params.id);
    
             if (albumId){
                 res.status(200).send(albumId)
             }
             else{
                  res.status(204).send('no se encuentra ese album')
             }
         }
        catch(err){
             res.status(500).send('hay un problema al mostrar un album')
         }
})


router.post("/albums", async(req, res)=>{
    try{
        await albums.create(req.body)
        res.status(200).send('album creado!');
    }
    catch(err){
        res.status(500).send(err)
    }
})

router.delete("/albums/:id", async(req, res)=>{
    try{
        await albums.findByIdAndDelete(req.params.id,)
        res.status(204).send('album eliminado')
    }
    catch(err){
        req.status(500).send('Algo anda mal')
    }
})

router.put("/albums/:id", async(req,res)=>{
    try{
        await albums.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).send('album editado')
    }
    catch(err){
        res.status(500).send(err)
    }
})



   router.post("/albums/:id/canciones", async (req,res)=>{
    try{
        const addcancion = await albums.findById(req.params.id);

        if (!addcancion){
            res.status(404).send("not found")
            return;
        }
        addcancion.canciones.push(req.body);
        await addcancion.save()
        res.send('cancion agregada al albun con exito')
    }
   catch(err){
        res.status(500).send(err)
    }
})

router.delete("/albums/:id/canciones/:idCancion", async (req,res)=>{
    try{
        const eliminarCancion = await albums.findById(req.params.id);

        if (!eliminarCancion){
            res.status(404).send("no se encuentra album");
            return;
        }

        const cancionEliminar = eliminarCancion.canciones.id(req.params.idCancion);

         if (!cancionEliminar){
            res.status(404).send("no se encuentra cancion")
             return;
         }

        eliminarCancion.canciones.id(req.params.idCancion).deleteOne();
        
        await eliminarCancion.save();

        res.send('cancion eliminada con exito!');

    }
   catch(err){
        res.status(500).send(err),
        console.log(err)
    }
})
   







module.exports = router
const mongoose = require('mongoose');

const musica = new mongoose.Schema({

    titulo : {type:String,
        required : true,
        message:  'error en el titulo'},
    descripcion : {type:String,
        required : true,
        max : [200, 'no puede ser tan largo'],
        min : [5, 'no puede ser tan corto'] ,
        message : 'error en la descripcion'},
    anoLanzamiento : {type:Number,
        required : true,
        message : 'error en el año de musica',
        maxLength : [0, 'necesita tener un año realista']},
    imagenUrl :{type:String,
        require : true} ,   
    canciones : [{
        
        titulo : {type:String,
            required : true},
        
        duracion :{type:String, required : true},
        cancionLink :{type:String, required : true}
    }]

    // userName:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref :'users'
    //  },


})

module.exports = mongoose.model('Musica' , musica);
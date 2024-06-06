const mongoose = require('mongoose');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const usuarios = new mongoose.Schema({

    nombre : {type:String,
        min : [2, 'el nombre no puede ser tan corto']
        },
    apellido : {type:String,
        min : [2, 'el apellido no puede ser tan corto']},
    email : {type:String,
        required : true,  
        validator: function(v) {
            return regex.test(v);
          },
          message:  'debes colocar un email valido'
        
    },
    contraseña : {type:String,
        required : true},
    favoritos : {type : String,
        required : true}


})

module.exports = mongoose.model('Usuarios' , usuarios);
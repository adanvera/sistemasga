const { default: mongoose } = require('mongoose');
const {Schema ,model}= require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido:{
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'La constraseña es obligatorio']
    },
    rol:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
        
    },
    estado:{
        type: Boolean,
        default:true
    },


});
UsuarioSchema.methods.toJSON = function () {
        /*Retorn a todo excecpto __v,password,_id*/
        const { __v,password,_id,...usuario } =  this.toObject();
        usuario.uui = _id;
        return usuario;
}



module.exports = model('Usuario',UsuarioSchema);
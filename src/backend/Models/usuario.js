const {Schema ,model}= require('mongoose')

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
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
        type: String,
        required: true,
        emun:['ADMIN_ROLE','USER_ROLE']
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
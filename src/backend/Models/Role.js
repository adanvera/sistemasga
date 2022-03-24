const {Schema,model} = require('mongoose');

const RoleSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    acceso:{
        type:Array,
        required: true,
        default:[]
    },
    estado:{
        type:Boolean,
        default:true
    }
});

module.exports = model('Role',RoleSchema);
const { default: mongoose } = require('mongoose');
const {Schema ,model}= require('mongoose')

const ProyectoSchema = Schema({
    descripcion:{
        type: String,
        required: [true, 'La descripcion del proyecto es obligatorio']
    },
    usuarios:{
      type:Array,
      default:[]
    }

});




module.exports = model('Proyecto',ProyectoSchema);
const { default: mongoose } = require('mongoose');
const {Schema ,model}= require('mongoose')

const ProyectoSchema = Schema({
    nombre:{
      type:String,
      required: [true, 'El nombre del proyecto es obligatorio']
    },
    descripcion:{
        type: String,
        default: ""
        
    },
    estado:{
      type: Boolean,
      default:true
    },
    usuarios:{
      type:Array,
      default:[]
    }

});




module.exports = model('Proyecto',ProyectoSchema);
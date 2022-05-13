const {Schema ,model}= require('mongoose')

const SprintSchema = Schema({
    nombre:{
      type:String,
      required: [true, 'El nombre del sprint es obligatorio']
    },
    fecha_inicio:{
      type:Date,
    },
    fecha_fin:{
      type:Date
    },
    proyecto:{
      type: Schema.Types.ObjectId,
      ref:'Proyecto'
    },
    estado:{
      type:Boolean,
      default:true
    }
    

});




module.exports = model('Sprint',SprintSchema);
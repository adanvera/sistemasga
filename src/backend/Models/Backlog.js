const { default: mongoose } = require('mongoose');
const {Schema ,model}= require('mongoose')

const BacklogSchema = Schema({
    id_project:{
      type:String,
      required: [true, 'El id proyecto es obligatorio!!']
    },
    name_project:{
      type:String,
      required: [true, 'El nombre proyecto es obligatorio!!']
    }



});




module.exports = model('Backlog',BacklogSchema);
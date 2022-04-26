const { default: mongoose } = require('mongoose');
const {Schema ,model}= require('mongoose')
let counter = 1;
let CountedId = {type: Number, default: () => counter++};
const UserStorySchema = Schema({
    us_id:CountedId,
    task:{
      type:String,
      required: [true, 'La tarea es obligatorio!!']
    },
    us_priority:{
      type: String,
      default: 'medium'
    },
    us_state:{
      type: String,
      default: 'backlog'
    },
    us_active:{
      type:Boolean,
      default:true
    },
    id_project:{
      type:String,
      required: [true, 'El id proyecto es obligatorio!!']
    },
    name_project:{
      type:String,
      required: [true, 'El nombre proyecto es obligatorio!!']
    } 



});



module.exports = model('UserStory',UserStorySchema);




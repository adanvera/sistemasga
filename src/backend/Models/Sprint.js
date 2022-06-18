const {Schema ,model}= require('mongoose')

const SprintSchema = Schema({
    name:{
      type:String,
      required: [true, 'El nombre del sprint es obligatorio']
    },
    description:{
      type:String,
      required: [true, 'La tarea del sprint es obligatorio']
    },
    duration:{
      type:String
    },
    user_story:[{ type :Schema.Types.ObjectId, ref: 'UserStory'}],
    project:{
      type:Schema.Types.ObjectId,
      ref:'Proyecto',
      
      
    },
    state:{
      type:String,
      emun:['por hacer'],
      default:'por hacer'
    }
    

});




module.exports = model('Sprint',SprintSchema);
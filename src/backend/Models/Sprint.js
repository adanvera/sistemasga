const {Schema ,model}= require('mongoose')

const SprintSchema = Schema({
    name:{
      type:String,
      required: [true, 'El nombre del sprint es obligatorio']
    },
    task:{
      type:String,
      required: [true, 'La tarea del sprint es obligatorio']
    },
    duration:{
      type:String
    },
    user_story:{
      type:Schema.Types.ObjectId,
      ref:'UserStory'
    },
    state:{
      type:Boolean,
      default:true
    }
    

});




module.exports = model('Sprint',SprintSchema);
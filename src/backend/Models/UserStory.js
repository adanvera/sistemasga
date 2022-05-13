const { default: mongoose } = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const {Schema ,model}= require('mongoose')

const UserStorySchema = Schema({
    task:{
      type:String,
      required: [true, 'La tarea es obligatorio!!']
    },
    task_body:{
      type:String,
      default:"Sin descripcion "
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
    }, 
    assigned_user:{
      type: Schema.Types.ObjectId,
      ref:'Usuario'
    }


});
UserStorySchema.methods.toJSON = function () {
  /*Retorn a todo excecpto __v,password*/
  const { __v,...userStory } =  this.toObject();
  return userStory;
}
UserStorySchema.plugin(AutoIncrement,{inc_field: 'us_id'})

module.exports = model('UserStory',UserStorySchema);




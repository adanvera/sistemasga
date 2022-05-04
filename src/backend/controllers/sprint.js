const Sprint = require("../Models/Sprint")

const crearSprint = async (req, res) => {

  const sprint = new Sprint(req.body)
  try {
    await sprint.save()
    res.json({
      sprint,
      msg: 'Sprint creado exitosamente!!'
    })
  } catch (error) {
    console.log(error);
    return res.json({
      msg: 'error al crear un sprint'
    })
  }
}

const obtenerSprint = async (req, res) => {

  const sprint = await  Sprint.find({}).populate('proyecto',{
    nombre:1,
    descripcion:1})
  try {
    
    res.json({
      sprint,
      
    })
  } catch (error) {
    console.log(error);
    return res.json({
      msg: 'error al crear un sprint'
    })
  }
}

module.exports = {
crearSprint,
obtenerSprint
}

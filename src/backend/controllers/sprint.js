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

module.exports = {
crearSprint  
}

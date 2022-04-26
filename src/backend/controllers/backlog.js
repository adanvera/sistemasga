const Backlog = require("../Models/Backlog")

const crearBacklog = async (req,res) => { 
    const backlog = new Backlog(req.body)
    try {
      await backlog.save()
      res.json({
        backlog,
        msg: 'Backlog creado exitosamente!!'
      })
    } catch (error) {
      return res.json({
        msg: 'error al crear el backlog'
      })
    }
}
const obtenerBacklog = async (req,res) => { 
  try {
    const backlogs = await Backlog.find();
    res.status(200).json({
      backlogs
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Ocurrio un error",
    });
  }
}

module.exports = {
  crearBacklog,
  obtenerBacklog
}
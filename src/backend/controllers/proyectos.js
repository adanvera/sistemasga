const Proyecto = require("../Models/Proyecto");
const usuario = require("../Models/usuario");

const agregarProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body)
  try {
    await proyecto.save()
    res.json({
      proyecto,
      msg: 'Proyecto creado exitosamente!!'
    })
  } catch (error) {
    return res.json({
      msg: 'error al crear un nuevo proyecto'
    })
  }
}

const obtenerProyectos = async (Req, res) => {
  try {
    const proyectos = await Proyecto.find({ estado: true });
    res.status(200).json({
      proyectos
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Ocurrio un error",
    });
  }

}

const actualizarProyecto = () => {

}

const eliminarProyecto = async (req,res) => {
  const { id } = req.params;
	console.log(id);

	const proyecto = await Proyecto.findByIdAndUpdate(id, { estado: false });

	try {
		res.json({
			msg: "Proyecto eliminado correctamente!",
			proyecto,
		});
	} catch (error) {
    console.log(error);
		return res.status(400).json({
			msg: "Ocurrio un error inesperado",
			error,
		});
	}
}

module.exports = {
  agregarProyecto,
  obtenerProyectos,
  actualizarProyecto,
  eliminarProyecto
}

const Proyecto = require("../Models/Proyecto");
const usuario = require("../Models/usuario");

/**
 * It creates a new project and saves it to the database.
 * @param req - request
 * @param res - The response object.
 * @returns a promise.
 */
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
const obtenerProyectosById = async (req, res) => {
  //id del proyecto
  const { id } = req.params;
  try {
    const proyecto = await Proyecto.findById(id);
    res.status(200).json({
      proyecto
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Ocurrio un error",
    });
  }

}

const agregarUsuarioProyecto = async (req,res) => {
  //id del proyecto
  const { id } = req.params;

  try {
    const proyectoEncontrado = await Proyecto.findById(id)
    if(!proyectoEncontrado){
      return res.status(404).json({
        msg:'Proyecto no encontrado'
      })
    }
    const {usuarios}= req.body

    if(!usuarios || usuarios.length<= 0){
      return res.status(404).json({
        msg:'El usuario es obligatorio'
      })
    }
    const nuevosUsuarios = [...proyectoEncontrado.usuarios,...usuarios]
    console.log(nuevosUsuarios);
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(id,{usuarios:nuevosUsuarios})
    res.status(200).json({
      msg:'Usuarios agregado al proyecto exitosamente !!',
    })

  } catch (error) {
		return res.status(400).json({
			msg: "Ocurrio un error inesperado",
			error,
		});
  }

}
const actualizarProyecto = async (req,res) => {
  //id del proyecto
  const { id } = req.params;

  try {
   
    const proyectoActualizado = await Proyecto.findByIdAndUpdate(id,req.body)
    res.status(200).json({
      msg:'Proyecto actualizado exitosamente !!',
    })

  } catch (error) {
		return res.status(400).json({
			msg: "Ocurrio un error inesperado",
			error,
		});
  }

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
  agregarUsuarioProyecto,
  eliminarProyecto,
  actualizarProyecto,
  obtenerProyectosById
}

const Proyecto = require("../Models/Proyecto");
const UserStory = require("../Models/UserStory");

const agregarUserStory = async (req, res) => {
  const us = new UserStory(req.body)
  try {
    await us.save()
    res.json({
      us,
      msg: 'User Story creado exitosamente!!'
    })
  } catch (error) {
    console.log(error);
    return res.json({
      msg: 'error al crear un User Story'
    })
  }
}

const obtenerUsByProjectID = async (Req, res) => {
  
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
  agregarUserStory,
  obtenerUsByProjectID,
  agregarUsuarioProyecto,
  eliminarProyecto,
  actualizarProyecto
}

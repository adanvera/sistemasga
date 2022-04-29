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

const obtenerUsByBacklog = async (req, res) => {
  const {id} = req.params

  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"backlog"});
    res.status(200).json({
      us
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

const eliminarUS = async (req,res) => {
  const { id } = req.params;

	const us = await UserStory.findOneAndUpdate({us_id:id}, { us_active: false });

	try {
		res.json({
			msg: "Us eliminado correctamente!",
			us,
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
  obtenerUsByBacklog,
  eliminarUS,
  agregarUsuarioProyecto,
  actualizarProyecto
}

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

/*Metodo para obtener los distintos estados el User Story, se les pasa el id del proyecto  como parametro
  ademas se filtra por us_active = true,
*/
const obtenerUsByBacklog = async (req, res) => {
  const {id} = req.params

  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"backlog"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });
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
const obtenerUsByEnCurso = async (req, res) => {
  const {id} = req.params

  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"en_curso"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });;
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
const obtenerUsByDetenido = async (req, res) => {
  const {id} = req.params

  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"detenido"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });;
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
const obtenerUsByVerificar = async (req, res) => {
  const {id} = req.params
  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"a_verificar"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });
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
const obtenerUsByEnVerificacion = async (req, res) => {
  const {id} = req.params
  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"en_verificacion"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });
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
const obtenerUsByFinalizado = async (req, res) => {
  const {id} = req.params
  try {
    const us = await UserStory.find({ us_active: true, id_project:id ,us_state:"finalizado"}).populate('assigned_user',{
      nombre:1,
      correo:1,
      _id:0
      });
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


const actualizarUS = async (req,res) => {
  //_id del US
  const { id } = req.params;

  try {
   
    const usActualizado = await UserStory.findByIdAndUpdate(id,req.body)
    res.status(200).json({
      msg:'Us actualizado exitosamente !!',
      usActualizado
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
  obtenerUsByEnCurso,
  obtenerUsByDetenido,
  obtenerUsByVerificar,
  obtenerUsByEnVerificacion,
  obtenerUsByFinalizado,
  eliminarUS,
  actualizarUS,
}

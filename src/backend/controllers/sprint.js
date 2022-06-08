const Sprint = require('../Models/Sprint')

/**
 * It creates a new Sprint object from the request body, saves it to the database, and returns a
 * response with the new Sprint object and a message.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 * @returns The sprint object and a message that indicated everything is ok or a bad request.
 */
const crearSprint = async (req, res) => {
	const sprint = new Sprint(req.body)
	try {
		await sprint.save()
		res.json({
			sprint,
			msg: 'Sprint creado exitosamente!!',
		})
	} catch (error) {
		console.log(error)
		return res.json({
			msg: 'error al crear un sprint',
		})
	}
}


/**
 * Get all Sprint, this function was created to test the API
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const obtenerSprint = async (req, res) => {
	const sprint = await Sprint.find().populate('user_story', {'_id':1,'task':1,'task_body':1})
	try {
		res.json({
			sprint,
		})
	} catch (error) {
		console.log(error)
		return res.json({
			msg: 'error al crear un sprint',
		})
	}
}
/**
 * It takes the id of a sprint and updates it with the data sent in the request body.
 * @param req - The request object.
 * @param res - the response object
 * @returns {
 *   "msg": "Sprint se ha modificado correctamente",
 *   "modifiedSpring": null
 * }
 */
const modificarSprint = async(req,res)=>{
  
  if(!req.params.id) return res.status(400).json({msg:'Se requiere un ID para realizar la busqueda'})

  const sprint =  await Sprint.findById(req.params.id)
  if(!sprint) return res.status(204).json({msg:'Sprint no encontrado'})
  try {
    const modifiedSpring = await Sprint.findByIdAndUpdate(req.params.id,req.body)
    return res.status(200).json({
      msg:'Sprint se ha modificado correctamente',
      modifiedSpring

    })
  } catch (error) {
    return res.status(500).json({msg:'Ocurrio un error inesperado'})
  }


}



module.exports = {
	crearSprint,
	obtenerSprint,
  modificarSprint
}

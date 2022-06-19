const Sprint = require("../Models/Sprint")

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
			msg: "Sprint creado exitosamente!!",
		})
	} catch (error) {
		console.log(error)
		return res.json({
			msg: "error al crear un sprint",
		})
	}
}

/**
 * Get all Sprint, this function was created to test the API
 * @param {*} req
 * @param {*} res
 * @returns
 */
const obtenerSprintByID = async (req, res) => {
	const {id} = req.params
	
	
	try {
		const sprint = await Sprint.findById(id).populate("user_story", {
		})
		res.json({
			sprint,
		})
	} catch (error) {
		console.log(error)
		return res.json({
			msg: "error al crear un sprint",
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
const modificarSprint = async (req, res) => {
	const sprint = await Sprint.findById(req.params.id)
	if (!sprint) return res.status(204).json({ msg: "Sprint no encontrado" })

	try {
		const modifiedSpring = await Sprint.findByIdAndUpdate(
			req.params.id,
			req.body
		)
		return res.status(200).json({
			msg: "Sprint se ha modificado correctamente",
			modifiedSpring,
		})
	} catch (error) {
		return res.status(500).json({ msg: "Ocurrio un error inesperado" })
	}
}

//agrega la us al sprint
const agregarUs = async (req, res) => {
	const { id } = req.params
	const sprintEncontrado = await Sprint.findById(id)
	if (!sprintEncontrado) {
		return res.status(402).json({ msg: "No se existe sprint con id: " + id })
	}

	const { user_stories } = req.body

	//si el sp no tiene us, se agrega directametne
	//    sino se concatena el arry
	if (sprintEncontrado.user_story.length <= 0) {
		sprintEncontrado.user_story = user_stories
		const sprintActualizado = await Sprint.findByIdAndUpdate(
			id,
			sprintEncontrado
		)
		return res.json({
			msg: "US agregado correctamente",
		})
	} else {
		const updatedUS = sprintEncontrado.user_story.concat(user_stories)
		sprintEncontrado.user_story = updatedUS
		
		const updatedSP = await Sprint.findByIdAndUpdate(id,sprintEncontrado)
		return res.json({
			msg:'US agregado correctamente '
		})


	}
}
const getAllSprint = async(req,res)=>{
	try {
		const sprints = await Sprint.find()
		if(!sprints){
			return res.json({
				msg:'Aun no se ha creado ningun sprint'
			})
		}
		res.status(200).json({
		sprints
		})
	} catch (error) {
		console.log(error);
		return res.status(402).json({
			msg:error.message
		})
	} 
}

module.exports = {
	crearSprint,
	obtenerSprintByID,
	modificarSprint,
	agregarUs,
	getAllSprint
}

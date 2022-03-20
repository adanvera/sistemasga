const { obtenerNombreRole } = require('../helpers/helperNombreRol.js')
const esRolValido = require('../helpers/validarRol')
const Usuario = require('../Models/usuario')
const usuarioPost = async (req, res) => {

	const user = new Usuario(req.body)

	try {
		await user.save()
		res.status(200).json({
			msg: 'Usuario almacenado correctamente',
			user,
		})
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({
				msg: 'Correo ya registrado',
			})
		}
		console.log(error)
		return res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}
const usuariosPut = async (req, res = response) => {

  const { id } = req.params;
  const {_id,password,...resto} = req.body

  

      const usuario = await Usuario.findByIdAndUpdate(id, resto);



  res.json({
      msg: 'put API - usuariosPut',
      usuario
  });
}


const usuarioMostrar = async (req, res) => {
	try {
		const usuarios = await Usuario.find({ estado: true })
		
		
		usuarios.rol = res.status(200).json({
			usuarios,
		})
	} catch (error) {
		console.log(error)
		return res.status(400).json({
			msg: 'Ocurrio un error',
		})
	}
}

const usuarioEliminar = async (req, res) => {
	const { id } = req.params
	console.log(id)

	const usuario = await Usuario.findByIdAndUpdate(id, { estado: false })
	//const usuarioAutenticado = req.usuario;

	try {
		res.json({
			msg: 'Usuario eliminado correctamente',
			usuario,
		})
	} catch (error) {
		return res.status(400).json({
			msg: 'Ocurrio un error inesperado',
			error,
		})
	}
}
module.exports = {
	usuarioPost,
	usuarioMostrar,
	usuariosPut,
	usuarioEliminar,
}

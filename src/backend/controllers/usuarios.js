const  esRolValido  = require('../helpers/validarRol')
const Usuario = require('../Models/usuario')
const usuarioPost = async (req,res)=>{
  const rolInvalido = await esRolValido(req.body.rol)
  if(rolInvalido.error){
    return res.status(400).json({
      msg:rolInvalido.msg
    })
  }
  const user = new Usuario(req.body)

  try {
    await user.save()
    res.status(200).json({
      msg:'Usuario almacenado correctamente',
      user
    })
  } catch (error) {
    if(error.code === 11000){
      return res.status(400).json({
      msg:'Correo ya registrado'
    })}

    return res.status(400).json({
      msg:'Ocurrio un error inesperado',
      error:error.response
    })
    
  
  }
  
  
}


module.exports = {
  usuarioPost
}
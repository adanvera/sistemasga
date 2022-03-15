const  esRolValido  = require('../helpers/validarRol')
const Usuario = require('../Models/usuario')
const usuarioPost = async (req,res)=>{
  const rolValido= await esRolValido(req.body.rol)
  if(rolValido.error){
    return res.status(400).json({
      msg:rolValido.msg
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

const usuarioMostrar = async (req,res)=>{
  try {
    const usuarios = await Usuario.find({estado:true})
    res.status(200).json({
      usuarios
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg:'Ocurrio un error'
    })
  }

}
module.exports = {
  usuarioPost,
  usuarioMostrar
}
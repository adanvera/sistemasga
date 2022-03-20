const  esRolValido  = require('../helpers/validarRol')
const Usuario = require('../Models/usuario')
const usuarioPost = async (req,res)=>{
  const rolValido= await esRolValido(req.body.rol)
  if(rolValido.error){
    return res.status(400).json({
      msg:rolValido.msg
    })
  }
  const {existeRol}= rolValido
  req.body.rol = existeRol._id 
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
    console.log(error);
    return res.status(400).json({
      msg:'Ocurrio un error inesperado',
      error
    })
    
  
  }
  
  
}
const usuarioModificar = async (req,res)=>{
  res.json({
    msg:'mensaje'
  })
}
const usuarioMostrar = async (req,res)=>{
  try {
    const usuarios = await Usuario.find()
    console.log(usuarios);
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

const usuarioEliminar = (req,res)=>{
    
  
}
module.exports = {
  usuarioPost,
  usuarioMostrar,
  usuarioModificar,
  usuarioEliminar
}
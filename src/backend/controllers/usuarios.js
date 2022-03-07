const Usuario = require('../Models/usuario')
const usuarioPost = async (req,res)=>{
 const user = new Usuario(req.body)
  try {
    console.log(user);
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
      msg:'Ocurrio un error inesperado'
    })
    
  
  }
  
  
}


module.exports = {
  usuarioPost
}
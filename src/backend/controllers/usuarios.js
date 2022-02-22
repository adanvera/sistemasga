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
    console.log(error);
    return res.status(400).json({
      msg:'Ocurrio un error al intentar registrar el usuario'
    })
  }
  
  
}


module.exports = {
  usuarioPost
}
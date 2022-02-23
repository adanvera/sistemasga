const Usuario = require('../Models/usuario')
const authPost = async(req,res)=>{
  const {correo,password} = req.body
  try {
    const usuarioEncontrado =await Usuario.findOne({correo,password})
    if(!usuarioEncontrado){
      return res.status(400).json({
        msg:'Correo o contraseña invalida'
      })
    }
    res.status(200).json({
      usuarioEncontrado
    })
    
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg:'Ocurrio un error'
    })
  }

}

module.exports ={
  authPost
}
const Role = require("../Models/Role");


const obtenerRoles = async(req,res) => {
  try {
    const roles = await Role.find()
    res.status(200).json({
      roles
    })
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg:'Ocurrio un error'
    })
  }
}
const agregarRoles = async (req,res)=>{
  const role = new Role(req.body)
  

  try {
    await role.save()
    res.status(200).json({
      msg:'Rol creado correctamente',
     role
    })
  } catch (error) {
    if(error.code === 11000){
      return res.status(400).json({
      msg:'Correo ya registrado'
    })}
    return res.status(400).json({
      msg:'Ocurrio un error inesperado',
      error
    })
    
  
  }
  

}

module.exports={
  obtenerRoles,
  agregarRoles
}
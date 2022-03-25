const Role = require("../Models/Role");
const actualizarRol = async (req, res = response) => {

  const { id } = req.params;
  const {_id,...resto} = req.body

  

      const rol = await Role.findByIdAndUpdate(id, resto);



  res.json({
      msg: 'Rol actualizado correctamente',
      rol
  });
}
const elimarRol = async (req,res)=>{
  
    const { id } = req.params
  
    const role = await Role.findByIdAndUpdate(id, { estado: false })
    //const usuarioAutenticado = req.usuario;
  
    try {
      res.json({
        msg: 'Rol eliminado correctamente',
        role,
      })
    } catch (error) {
      return res.status(400).json({
        msg: 'Ocurrio un error inesperado',
        error,
      })
    }
  
}
const obtenerRoles = async(req,res) => {
  try {
    const roles = await Role.find({estado:true})
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
  agregarRoles,
  elimarRol,
  actualizarRol
}
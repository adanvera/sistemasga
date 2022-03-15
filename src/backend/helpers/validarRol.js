const Role  = require('../Models/Role')

const esRolValido = async ( rol = '' ) =>{
  const existeRol = await Role.findOne({ rol })
         if( !existeRol ){
             return {
               error:true,
               msg:'El rol no existe'
             }
         }
        return {
          error:false,
          msg:'Rol valido'
        }

}
module.exports = esRolValido
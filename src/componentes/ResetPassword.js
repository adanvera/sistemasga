import { Container, Form } from "react-bootstrap"
import { FloatingLabel } from "react-bootstrap"


const ResetPassword = ()=>{
  return (
    <>
      <Container  fluid={true} className='reset-bg w-100 '>
        <Container className="reset-box pl-3 pr-3" > 
            <div className="row justify-content-center"> 
              <div className="col-md-12 mb-5">
                <h1>Cambio contraseña</h1>
              </div>
              <div className="col-md-12"> 
                <FloatingLabel id="flotingreset" label="Correo electrónico" className="mb-3">
                  <Form.Control  className='' type="email" placeholder="Ingrese correo" name="email" id='emailreset'   />
                </FloatingLabel>
              </div>
            </div>
            <div className='row col mt-5 justify-content-center'>
              <div className='col-md-6 bt-centrar'>
                <button type="submit" className='btn-cls'>Cancelar</button> 
              </div>
              <div className='col-md-6 bt-centrar'>
                <button type="submit" className='btn-crear'>Enviar</button> 
              </div>
            </div>
        </Container>
      </Container>
      
    </>
  )
}

export default ResetPassword
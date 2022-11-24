import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
//import '../../src/style.css';
//import '../style.css';

const URI = 'http://localhost:8000/usuarios/reguser'

export const CompCreateUser = () => {
 
    const [correo, setContent] = useState('')
    const [nomuser, setUsuario] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {correo:correo, nomuser: nomuser, password: password})
        navigate('/users')
    }   
    return (
        <div>
           <h3>Creación de  Usuarios</h3>
           <Form onSubmit={store}>
           <Form.Group className="mb-3" >
               <div>
              
                    <Form.Control
                        value={nomuser}
                        onChange={ (e)=> setUsuario(e.target.value)} 
                        type="text"
                        placeholder = "Ingrese su nombre"
                       
                    />                                           
                </div>
                <div>
              
                     <Form.Control
                        value={correo}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="email"
                        placeholder = "email"
                       
                     />                      
                 </div>
                 <div>
                 
                     <Form.Control
                        value={password}
                        onChange={ (e)=> setPass(e.target.value)} 
                        type = "password"
                        
                        placeholder = "Password"
                        
                      />                 
                 </div>
                 <Button  variant="primary" type="submit" className="btn-register">Guardar</Button>                  
           </Form.Group>
           </Form>
        </div>
    )
}

export default CompCreateUser
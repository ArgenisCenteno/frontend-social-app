import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import axios from 'axios'
import Swal from 'sweetalert2'
import './Register.scss'
import {useContext, useState } from 'react'
import Alert from '@mui/material/Alert';
const Register = () => {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) =>{
    setInputs( (prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  

  const hadleClick = async (e) =>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs)

      await login(inputs);
      navigate("/")

    } catch (err) {
      setErr(err.response.data)

      Swal.fire({
        icon: 'error',
        title: err.response.data 
      })
       
    }
  }

  

  return (
    <div className='register'>
        <div className="card">
          <div className="left">
              <h1>Facevook</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aperiam explicabo
                 impedit, harum corrupti odit recusandae fugiat, voluptas nobis beatae
                </p>
                <span>¿Ya estas registrado?</span>
                <Link to='/login'>
                 <button>Ingresar</button>
                </Link>

               
          </div>
          <div className="right"> 
              <h1>Registrarse</h1>  
              <form> 
              <input type='text' placeholder='Nombre' name="name" onChange={handleChange} required/>
                <input type='text' placeholder='Usuario' name="username" onChange={handleChange} required/>
                <input type='text' placeholder='Email' name="email" onChange={handleChange} required/>
                <input type='password' placeholder='Contraseña' name="password" onChange={handleChange} required/>
                <button onClick={hadleClick}>Registrar</button>
                 
  
              </form>
          </div>
        </div>
    </div>
  )
}

export default Register
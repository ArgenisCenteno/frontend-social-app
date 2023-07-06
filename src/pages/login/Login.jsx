import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import './Login.scss'
import Swal from 'sweetalert2';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
      Swal.fire({
        icon: 'error',
        title: err.response.data 
 
      })
    }
  };

  return (
    <div className='login'>
        <div className="card">
          <div className="left">
              <h1>Hola Mundo</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aperiam explicabo
                 impedit, harum corrupti odit recusandae fugiat, voluptas nobis beatae
                </p>
                <span>¿No tienes una cuenta?</span>
                
                <Link to='/register'>
                 <button>Registrarse</button>
                </Link>

               
          </div>
          <div className="right">
              <h1>Iniciar sesión</h1>
              <form>
                <input type='text' placeholder='Usuario'  name="username" onChange={handleChange}/>
                <input type='password' placeholder='Contraseña'  name="password" onChange={handleChange}/>
                <button onClick={handleLogin}>Ingresar</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login
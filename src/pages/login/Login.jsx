import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import './Login.scss'

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
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
                <input type='text' placeholder='Usuario' />
                <input type='password' placeholder='Contraseña' />
                <button onClick={handleLogin}>Ingresar</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login
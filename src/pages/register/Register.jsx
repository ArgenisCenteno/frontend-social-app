import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
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
              <input type='text' placeholder='Nombre' />
                <input type='text' placeholder='Usuario' />
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='Contraseña' />
                <button>Registrar</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Register
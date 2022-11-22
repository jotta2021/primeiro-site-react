import './header.css'
import Fotousuario from '../../images/usuario.svg'
import { Link } from 'react-router-dom'
export default function Headertopo() {
  return (
    <>
      <header className="nav">
        <div className="lateral">
          <span></span>
        </div>
        <div className="centro">
          <ul>
            <Link to="/">
               <li>INICIO</li>
            </Link>
             
          
            
            < Link to="/about">

              <li>SOBRE</li>
            </Link>
            
            <li>CONTATO</li>
            <li>ESCREVA</li>
            <li>SAIR</li>
          </ul>
        </div>

        <div className="usuario">
          <img src={Fotousuario} />
        </div>
      </header>
    </>
  )
}

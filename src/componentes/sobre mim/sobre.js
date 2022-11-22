import './sobre.css'

import Fotousuario from '../../images/usuario.svg'
export default function Sobre() {
  return (
    <div>
     
      <div className="Sobre">
        <h2>Sobre mim</h2>
      </div>

      <div className="content">
        <img className="img-sobre" src={Fotousuario}></img>
        <p>Aluno do curso de Sistemas de Informação</p>
      </div>
      <div className="categ">
        <h2>Categorias</h2>
        <ul>
          <li>Vida</li>
          <li>Música</li>
          <li>Esportes</li>
          <li>Tecnologia</li>
        </ul>
      </div>
    </div>
  )
}

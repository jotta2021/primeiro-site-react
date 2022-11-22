import './cabeçalho.css'
import Background from '../../images/back.png'
export default function Cabecalho() {
  return (
    <div className="Cabecalho">
      <div className="titulo">
        <h2>Programação II</h2>
        <h1>SITE</h1>
      </div>
      <img className="back" src={Background}></img>
    </div>
  )
}

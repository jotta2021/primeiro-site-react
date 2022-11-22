import Headertopo from '../../componentes/header/header'
import Cabecalho from '../../componentes/cabeçalho/cabeçalho'
import Sobre from '../../componentes/sobre mim/sobre'
import AreaPostagem from '../../componentes/area-postagem/areapostagem'
import './inicio.css'
export default function Inicio(){
  return (
    <div>
     
      <Cabecalho />
      <div className="app-inicial">
        <AreaPostagem/>
        <Sobre />
      </div>
    </div>
  )
}


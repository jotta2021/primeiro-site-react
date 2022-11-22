import './areapostagem.css'
import Postagem from '../Postagens/postagem'
export default function AreaPostagem() {
  return (
    <div>
      <div className="Posts">
        <Postagem />
        <Postagem />
      </div>
    </div>
  )
}

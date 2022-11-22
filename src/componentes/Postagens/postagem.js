import './postagem.css'
import fotopost from '../../images/foto-legal.jpg'
export default function Postagem() {
  return (
    <div>
      <div className="post">
        <img className="fotopost" src={fotopost}></img>
        <div className="infor">
          <div className="postcat">
            <p>Rick and Mory</p>
          </div>
          <div className="posttitulo">
            <h2>Desenho top</h2>
          </div>
          <div className="postdata">
            <p>21 novembro 2022</p>
          </div>
        </div>
        <p>
          Acompanhe malucas viagens no tempo-espaço e por universos paralelos
          com Rick, um cientista com problemas com a bebida, e seu neto Morty,
          um adolescente não tão brilhante quanto o avô.
        </p>
      </div>
    </div>
  )
}

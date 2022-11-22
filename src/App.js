import Headertopo from './componentes/header/header'
import Inicio from './paginas/inicial/Inicio'
import Sobre from './componentes/sobre mim/sobre'


import{
  BrowserRouter as Router,
  Route,
  Routes}from "react-router-dom"

function App() {
  return (
    
    <Router>
        <Headertopo />
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/about" element={<Sobre/>}/>


        </Routes>


     <Inicio/>
     <Sobre/>

    </Router>
    
 
  )
}

export default App

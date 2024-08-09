import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Filmes from './pages/Filmes'
import Comedia from './pages/Comedia'
import Aventura from './pages/Aventura'
import Drama from './pages/Drama'
import Acao from './pages/Acao'
import Romance from './pages/Romance'
import Terror from './pages/Terror'
import Ficcaocientifica from './pages/FiccaoCientifica'



function AppRoutes() {
    return ( 
        <BrowserRouter>
        <Header/>
            <Routes> 
                <Route path="/" element={ <Filmes /> }></Route>
                <Route path="/comedia" element={ <Comedia /> }></Route>
                <Route path="/aventura" element={ <Aventura /> }></Route>
                <Route path="/drama" element={ <Drama /> }></Route>
                <Route path="/acao" element={ <Acao /> }></Route>
                <Route path="/romance" element={ <Romance /> }></Route>
                <Route path="/terror" element={ <Terror /> }></Route>
                <Route path="/ficcaocientifica" element={ <Ficcaocientifica /> }></Route>
            </Routes>
        <Footer/>
    </BrowserRouter>
    )
}

export default AppRoutes
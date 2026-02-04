import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Inicio from '../Inicio/inicio'
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"

import styles from './NavBar.module.scss'





import logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/Abdullah.jpg'

function NavBar() {
  return (
    <BrowserRouter>

      <nav className={styles.navBar}>
        <img src={logo} alt="Logo" />

        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/acoes">Ações da Connect</Link></li>
          <li><Link to="/quem-somos">Quem Somos</Link></li>
        </ul>

        <Link to="/perfil">
          <img className={styles.imgPerfil} src={ImgPerfil} alt="Perfil" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<AcoesDaConnect />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

    </BrowserRouter>
  )
}

export default NavBar

import "../../styles/App.css";
import { useState } from "react";
import logo from "../../images/logo1.png"
import { Link } from "react-router-dom";

export const Header = () => {

    const [sideState, sideUpdate] = useState(false)

    const OpenNav = () => {
        sideUpdate(!sideState)
        console.log(sideState)
    }

    const classSide = sideState ? "sidenav" : "navigation"

    return (
        <div className="header">
	        <div className="container">
		        <div className="logo">
                    <a href="index.html"><img src={logo} alt="" /></a>
                </div>
                <span className="menu" onClick={ OpenNav }></span>
                <div className={ classSide } >
                    <ul className="navig cl-effect-3" >
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Sobre RP</a></li>
                        <li><a href="#gallery">Galeria</a></li>
                        <li><a href="#Informacion">Informacion</a></li>
                    </ul>
                    <div className="links">
                        <div className="dropdown">
                            <button className="dropbtn">Links</button>
                            <div className="dropdown-content">
                                <a href="https://gta-rp-cuba.foroactivo.com/">Foro</a>
                                <a href="https://gta-rp-cuba.foroactivo.com/f4-normas">Conceptos de ROL</a>
                                <a href="https://discord.gg/xmQEmBajsG">Discord</a>
                            </div>
                        </div>
			        </div>
                </div>
            </div>
        </div>
    );
}

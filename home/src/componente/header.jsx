import '../css/Header.css'
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaShoppingCart,
    FaUser,
    FaSearch,
    FaTruck,
    FaLock,
    FaIndustry,
} from 'react-icons/fa';
import logo from '../imagem/logo.png';
import { Link } from 'react-router-dom';



export default function Header() { 

    return (
    <div className="pagina-inicial">
        {/* Faixa de aviso */}
        <div className="faixa-promocional">
            <strong>DESCONTO DE ATÉ 10% OFF</strong> | Comprando <strong>10 peças</strong> ou mais
        </div>

        {/* Barra de contato */}
        <div className="barra-contato">
            <div className="telefones">
                <span><FaPhoneAlt /> (00) 00000-0000</span>
                <span><FaWhatsapp /> (00) 00000-0000</span>
            </div>
            <div className="links-navegacao">
                <Link to="/">Inicio</Link>
                <a href="#">Quem somos</a>
                <a href="#">Fale conosco</a>
                <a href="#">Dúvidas</a>
            </div>
        </div>

        {/* Cabeçalho */}
        <div className="cabecalho-principal">
            <Link to="/" className="logo-marca">
                <img src={logo} alt="logo marca" />
            </Link>

            <div className="campo-pesquisa">
                <input type="text" placeholder="Pesquise aqui" />
                <FaSearch />
            </div>

            <div className="acoes-usuario">
                <button className="botao-pedido">Acompanhar pedido</button>
                <FaShoppingCart />
                <FaUser />
            </div>
        </div>

        {/* Menu */}
        <div className="menu-categorias">
            <a href="#">Masculino</a>
            <a href="#">Feminino</a>
            <a href="#">Infantil</a>
            <Link to="/personalizar"> <button className="botao-destaque">Personalização</button> </Link>
        </div>
    </div>

        )

}

import '../css/PaginaEntrada.css';
import foto1 from '../imagem/foto1.png'
import foto2 from '../imagem/foto2.png'
import foto3 from '../imagem/foto3.png'
import foto5 from '../imagem/foto5.png'
import banner from '../imagem/banner.png'

import {
    FaTruck,
    FaLock,
    FaIndustry,
} from 'react-icons/fa';

export default function PaginaEntrada() {
    return (
        <div className="pagina-inicial">

            {/* Banner */}
            <div className="espaco-banner"> 
                <img src={banner} alt='Banner expositorio'/>
            </div>

            {/* Benefícios */}
            <div className="rodape-beneficios">
                <div><FaIndustry /> Produção própria</div>
                <div><FaTruck /> Frete rápido e eficiente</div>
                <div><FaLock /> Compra 100% segura</div>
            </div>

            {/* Seção masculina */}
            <h2 className="titulo-sessao">MELHORES ESCOLHAS EM <strong>MASCULINO</strong></h2>
            <div className="lista-produtos">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="card-produto">
                        <div key={i} className="card"> <img src={foto1} alt="Camisa polo" /></div>
                        <p className="nome-produto">CAMISA POLO</p>
                    </div>
                ))}
            </div>

            {/* Seção feminina */}
            <h2 className="titulo-sessao">MELHORES ESCOLHAS EM <strong>FEMININO</strong></h2>
            <div className="lista-produtos">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="card-produto">
                        <div key={i} className="card"><img src={foto2} alt="Baby look" /></div>
                        <p className="nome-produto">CAMISA BABY LOOK</p>
                    </div>
                ))}
            </div>

            {/* Mais vendidos */}
            <h2 className="titulo-sessao">OS <strong>PRODUTOS TOP MAIS VENDIDOS</strong> DA KAVEST</h2>
            <div className="vitrine-vendidos">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="vitrine-item">
                        <div key={i} className="cardvitrine"><img src={foto3} alt="Produto" /></div>
                        <p className="descricao-produto">Camisa polo piquet terra cota masculina</p>
                        <p className="preco-atual">R$ 00,00</p>
                        <p className="preco-anterior">ou 3x de R$ 00,00</p>
                        <p className="avaliacao">★★★★★(45)</p>
                    </div>
                ))}
            </div>
            {/* Seção de ofertas */}
            <div className="secao-ofertas">
                <h2 className="titulo-sessao">OFERTAS INCRIVEIS <strong>PARA O OUTONO</strong></h2>
                <div className="cards-ofertas">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="card-oferta">
                            <img src={foto5} alt="Produto em oferta" />
                            
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
}

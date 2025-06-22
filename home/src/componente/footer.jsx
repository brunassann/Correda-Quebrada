import '../css/Footer.css'
import logo2 from '../imagem/logo_monocor.png'

export default function Footer(){
    return(
        <section>
        {/* Seção de cadastro */}
            <div className="secao-cadastro">
                <p>Quer receber as nossas novidades e promoções exclusivas? <strong>Cadastre-se!</strong></p>
                <div>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <button>Enviar</button>
                </div>
            </div>

            {/* Rodapé */}
            <footer className="rodape">
                <div className="rodape-logo">
                    <img src={logo2} alt="Logo Kavest" />
                </div>
                <p>© Kavest Camisetas – Todos os direitos reservados</p>
            </footer>
        </section>
    )
}



import '../assets/css/funcionamento.css'

function Funcionamento() {
    return (
        <>
            <section className="container-fluid funcionamento-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 text-light'>Como irá <span className='text-warning'>funcionar?</span></h2>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
                            <p className="lead text-light fw-semibold">
                            O Projeto Corp utilizará sensores estrategicamente implantados em áreas críticas, incluindo a região amazônica e outras propensas a queimadas e garimpo ilegal. Esses sensores coletarão dados em tempo real sobre a qualidade do ar, identificando poluentes e níveis anormais associados a incêndios e atividades ilegais.
                            </p>
                            <p className="lead text-light">
                            Quando detectados, alertas serão acionados para autoridades ambientais e organizações. Os dados serão armazenados e apresentados em um painel de controle de fácil acesso para monitoramento em tempo real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Funcionamento
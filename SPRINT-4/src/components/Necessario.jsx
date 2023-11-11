import '../assets/css/necessario.css'

function Necessario() {
    return (
        <>
            <section className="container-fluid necessario-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                            <h2 className='display-1 text-light fw-bolder'>Necessário</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h3 className='display-6 text-light fw-semibold'>01. Implantação Estratégica de Sensores</h3>
                            <p className="lead text-light fw-light">
                                Posicionamento estratégico de sensores em áreas críticas, como a Amazônia e locais propensos a queimadas e garimpo ilegal.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className='display-6 text-light fw-semibold'>02. Tecnologia Avançada de Sensoriamento</h3>
                            <p className="lead text-light fw-light">
                                Utilização de sensores avançados e precisos para coletar dados em tempo real, identificando poluentes, gases anormais e atividades ilegais.
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className='display-6 text-light fw-semibold'>03. Conscientização e Parcerias</h3>
                            <p className="lead text-light fw-light">
                                Promoção da conscientização pública e colaboração com autoridades e comunidades locais para uma resposta eficaz e o desenvolvimento sustentável.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Necessario
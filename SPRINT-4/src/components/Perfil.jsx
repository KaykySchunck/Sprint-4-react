import '../assets/css/perfil.css'

function Perfil() {
    return (
        <>
            <section className="container-fluid perfil-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 text-dark'>Perfil do cliente</h2>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center ps-5 border-start">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><span className='fw-semibold'>Autoridades Ambientais</span>: Agências governamentais encarregadas de proteger o meio ambiente</li>
                                <li className="list-group-item"><span className='fw-semibold'>Organizações Ambientais</span>: ONGs e grupos sem fins lucrativos dedicados à conservação</li>
                                <li className="list-group-item"><span className='fw-semibold'>Cidades Inteligentes</span>: Governos locais buscando melhorar a qualidade do ar e o uso de recursos</li>
                                <li className="list-group-item"><span className='fw-semibold'>Público em Geral</span>: Todos que se preocupam com os desafios ambientais e a preservação</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Perfil
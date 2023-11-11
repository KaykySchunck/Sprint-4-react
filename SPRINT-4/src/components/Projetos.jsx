import '../assets/css/projetos.css'


function Projetos() {

    return (
        <>
            <section className="container-fluid projetos-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-start pb-3">
                            <h2 className='display-1 projetos-title'>Projeto</h2>
                            <p className='lead fw-semibold'>
                            O Projeto Corp é uma iniciativa de grande alcance que visa monitorar e proteger não apenas a região amazônica, mas também outras áreas críticas, combatendo as ameaças das queimadas e do garimpo ilegal. Tudo isso é realizado por meio de sensores Arduino de última geração que são capazes de detectar poluentes no ar e identificar áreas suspeitas de atividades ilegais em diversas regiões.
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center ps-5">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projetos
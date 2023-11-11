import ibmLogo from '../assets/imgs/ibm-logo.png'
import '../assets/css/challenge.css'

function ChallengeIBM() {
    return (
        <>
            <section className="container-fluid challenge-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center pb-3 border-bottom">
                            <h2 className='display-1 text-light'>Challenge</h2>
                            <img className='img-fluid' src={ibmLogo} alt="Logo da IBM" />
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center ps-5">
                            <p className='lead text-light'>
                                O projeto está focado na resolução do 15º Objetivo de Desenvolvimento Sustentável (ODS) estabelecido pela ONU, que prioriza a conservação da vida terrestre e da biodiversidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChallengeIBM
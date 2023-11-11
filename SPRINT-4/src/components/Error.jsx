import '../assets/css/errorStyle.css'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <Nav />
            <div className="container-fluid error-404">
                <h1 className='display-1'>Erro 404</h1>
                <h2 className='display-5'>Página não encontrada</h2>
                <Link className='btn btn-danger btn-lg mt-5' to="/">Voltar para o início</Link>
            </div>
        </>
    )
}

export default Error
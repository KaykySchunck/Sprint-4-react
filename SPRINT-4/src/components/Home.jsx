import ChallengeIBM from "./ChallengeIBM"
import Projetos from "./Projetos"
import Funcionamento from "./Funcionamento"
import Perfil from './Perfil'
import Necessario from './Necessario'


function Home(){
    return (
        <>
            <ChallengeIBM/>
            <Projetos/>
            <Funcionamento/>
            <Perfil/>
            <Necessario/>
        </>
    )
}

export default Home
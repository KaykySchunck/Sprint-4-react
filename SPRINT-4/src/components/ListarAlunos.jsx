import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaEdit, FaTrash} from 'react-icons'

function ListarAlunos(){

    //useState
    const [alunos, setAlunos]= useState([]);

    //promisse assincrona

    useEffect(()=>
        fetch('http://localhost:5000/alunos')
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setAlunos(res);
        })
    ),[];


    //funções 

    const handleDelete =(id) =>{
        fetch(`http://localhost:5000/alunos/${id}`,{
            method:'delete'
        })
        .then(()=>{
            window.location='/listarAlunos'
        })
    };

    return(
        <>
        <h1>Lista de ALunos</h1>
        <Link to="incluir">Inserir Aluno</Link>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {alunos.map((alu)=>(
                    <tr key={alu.id}>
                        <td>{alu.nome}</td>
                        <td>{alu.email}</td>
                    <td>
                        <Link to={`/editar/${alu.id}`}>
                            <FaEdit/>
                        </Link>
                        <button onClick={handleDelete.bind(this, alu.id)}>
                            <FaTrash/>
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>     
        </>
    )
}
export default ListarAlunos
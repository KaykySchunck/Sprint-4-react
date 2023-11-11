import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {CiCircleCheck } from "react-icons/ci";

function Alunos() {
  //useParams
  let {id} = useParams();

  //useState para criar um novo cadastro
  const [novo, setNovo] = useState({
    id,
    nome:"",
    email:"",
  })

  //funções 
  const handleChange =(e)=>{
    setNovo({...novo, [e.target.name]:e.target.value});
  };

  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch(`http://localhost:5000/alunos/${id ? id: ''}`,{
      method:'post',
      headers:{
          'Content-Type':'application/json',
      },
      body:JSON.stringify(novo),
    }).then(()=>{
      window.location='/';
    });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/alunos/${id}`)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
        setNovo(data);
      });
    }
    },[id])


  return(
    <>
    <h1>Cadastro de ALunos</h1>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={novo.nome}
        placeholder='Digite seu nome'
        onChange={handleChange}
      />  
      <input
        type="text"
        name="email"
        value={novo.email}
        placeholder='Digite seu email'
        onChange={handleChange}
      />  
      <button type="submit">Cadastrar</button>
      <Link to="/listarAlunos">
        <CiCircleCheck/>
      </Link>

    </form>

    </>
)

}

export default Alunos;
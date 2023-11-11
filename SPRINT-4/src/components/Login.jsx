import React, { useState } from 'react';
import '../assets/css/login.css';
import fotoLogin from '../assets/imgs/fotosprint2.jpeg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const enviarDadosLogin = async () => {
    try {
      // Certifique-se de que o email e a senha não estão vazios antes de enviar
      if (!emailInput || !passwordInput) {
        console.error('Email e senha são obrigatórios');
        return;
      }

      const resposta = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });

      const dadosDaResposta = await resposta.json();
      console.log('Resposta da API:', dadosDaResposta);

      // Adicione lógica aqui para lidar com a resposta da API, por exemplo, verificar se o login foi bem-sucedido

      // Exemplo de navegação em caso de login bem-sucedido
     navigate("/validation")
    } catch (error) {
      console.error('Erro ao enviar dados de login:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar o comportamento padrão do formulário, que recarrega a página

    try {
      // Enviar dados para a API local
      enviarDadosLogin();
    } catch (error) {
      console.error('Erro ao enviar dados de login:', error);
    }
  };

  return (
    <>
      <main className="container d-flex flex-column justify-content-center align-items-center p-5">
        <div className="login-box row my-5 border border-2 border-dark p-5 rounded">
          <div className="col-lg-6 mb-3 mb-lg-0 d-flex flex-column justify-content-center align-items center">
            <h2 className="display-3 text-center mb-5">Entrar na sua conta</h2>
            <form className="d-flex flex-column justify-content-between">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                placeholder="Digite o seu email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                id="emailInput"
                type="email"
                name="email"
                className="form-control mb-3"
              />
              <label htmlFor="password" className="form-label">
                Senha:
              </label>
              <input
                placeholder="Digite a sua senha"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
                id="passwordInput"
                type="password"
                name="password"
                className="form-control mb-3"
              />
              <button onClick={handleSubmit} type="submit" className="btn btn-outline-dark w-100">
                Logar
              </button>
            </form>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img className="login-image rounded" src={fotoLogin} alt="Foto de 6 pessoas em reunião" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;

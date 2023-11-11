import { useState, useEffect } from 'react';
import '../assets/css/validation.css';
import { useNavigate } from 'react-router-dom';

function Validation() {
  const [userInput, setUserInput] = useState('');
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setRandomNum1(getRandomNum());
    setRandomNum2(getRandomNum());
  }, []);

  function getRandomNum() {
    return Math.floor(Math.random() * 10);
  }

  const somaDosDois = randomNum1 + randomNum2;
  const isCorrect = somaDosDois === parseInt(userInput, 10);

  function verifyRobot() {
    if (isCorrect) {
      navigate('/');
    } else {
      navigate('/validation');
    }
  }

  return (
    <>
      <section className="container-fluid validation-section d-flex flex-column justify-content-center align-items-cente bg-danger">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="display-2 text-light">
                Verifique se você não é um robô?
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="display-4 text-light">
                {randomNum1} + {randomNum2}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <input
                type="number"
                className="form-control mb-3"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button onClick={verifyRobot} className="btn btn-dark w-100">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Validation;

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    login('Leandro Lucas');
    
    navigate( lastPath , {
      replace: true
    });
    
  }

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <br />

        <button 
          className="btn btn-primary"
          onClick={onLogin} >
            Login
        </button>
      </div>
    </>
  )
}
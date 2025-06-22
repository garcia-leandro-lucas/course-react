import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );
    console.log( user);

    return (
      <>
          <h3>Login Page</h3>
          <hr />

          <pre aria-label="pre">{ JSON.stringify(user, null, 3) }</pre>

          <button 
            className="btn btn-primary"
            onClick={ () => setUser({
              id: 123,
              name: 'Leandro',
              email: 'leandro@gmail.com'
            }) }
            aria-label="button-establecer-usuario"
            >
            Establecer usuario
          </button>
      </>
    )
  }
  
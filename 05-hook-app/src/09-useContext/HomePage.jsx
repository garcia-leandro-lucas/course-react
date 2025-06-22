import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext(UserContext);

    return (
      <>
          <h3>Home Page: <small>{user?.name}</small></h3>
          <hr />
          <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      </>
    )
  }
  
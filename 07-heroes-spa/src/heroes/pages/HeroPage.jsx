import { Navigate, useNavigate, useParams } from "react-router-dom"
import { HeroList } from "../components/HeroList"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  //console.log(id, rest);

  const hero = useMemo( () =>  getHeroById( id ), [id]);
  //console.log(hero);

  const onNavigateBack = () => {
    console.log(hero);
    // Opción 1: Se puede hacer una validación más elaborada
    /* return (hero.publisher === 'Marvel Comics')
      ? navigate('/marvel')
      : navigate('/dc'); */

    // Opción 2
    navigate(-1);
  }

  if (!hero) {
   // return <>404 - Not Found</>;
   return <Navigate to="/marvel" />;
  }

  return (
    <>
        <div className="row mt-5">
          <div className="col-4">
            <img 
              src={`/assets/heroes/${id}.jpg`}
              alt={hero.superhero} 
              className="img-thumbnail animate__animated animate__fadeInLeft"
              />
          </div>

          <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Alter Ego: </strong>{hero.alter_ego}</li>
              <li className="list-group-item"><strong>Publisher: </strong>{hero.publisher}</li>
              <li className="list-group-item"><strong>First Appearance: </strong>{hero.first_appearance}</li>
            </ul>

            <h5 className="mt-3">Characters:</h5>
            <p>{hero.characters}</p>

            <button
              className="btn btn-outline-primary"
              onClick={ onNavigateBack }
            >Regresar</button>
          </div>
        </div>
    </>
  )
}

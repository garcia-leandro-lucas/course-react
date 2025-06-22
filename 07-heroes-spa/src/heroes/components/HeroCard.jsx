import { Children } from "react";
import { Link } from "react-router-dom";

// Este es un componente que evalua si se repite la infomación.
const CharactersByHero = ({alter_ego, characters}) => {
    // Opción 1
    // if (alter_ego !== characters) return <p>{characters}</p>;
    
    // Opción 2 con ternario
    return (alter_ego === characters)
    ? <></>
    : <p>{characters}</p>
}

export const HeroCard = ( {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
} ) => {

    const heroImageURL = `/assets/heroes/${id}.jpg`;

    //const charactersHero = <p>{characters}</p>;

    return (
        <>
        <div className="col animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={heroImageURL} alt={superhero} className="card-img"/>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-text">{alter_ego}</p>

                                {/* Valida si se repite la información que no se muestre */}
                                {/* {
                                    alter_ego !== characters && charactersHero
                                } */}

                                <CharactersByHero characters={characters} alter_ego= {alter_ego} />
                                
                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>

                                <Link to={`/hero/${id}`}>
                                    Más...
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

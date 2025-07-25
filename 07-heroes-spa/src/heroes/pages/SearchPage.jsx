import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0 && heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    
    /* if ( searchText.trim().length <= 1 ) return; */
    console.log('desde testing.... form');
    navigate(`?q=${searchText}`);

  }

  return (
    <>
        <h1>Search Page</h1>
        <hr />

        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form action="" onSubmit={ onSearchSubmit } aria-label="form">
              <input 
                type="text" 
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
                />

                <button
                  className="btn btn-outline-primary mt-1"
                >
                  Search
                </button>
            </form>
          </div>

          <div className="col-7">
              <h4>Result</h4>
              <hr />
              
              {/* Opción 1 
                Tecnica para mostrar y ocultar elementos 
              */}
              
             {/* {
                (q === '') 
                ? <div className="alert alert-primary">Search a Hero</div>
                : (heroes.length === 0) 
                && <div className="alert alert-danger">No Hero with <strong>{q}</strong></div>
              } */}

              {/* --------------- */}

              {/* Opción 2 
                Tecnica para mostrar y ocultar elementos 
              */}
              <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
                Search a Hero
              </div>
              <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
                No Hero with <strong>{q}</strong>
              </div>

              {
                heroes.map( hero => (
                  <HeroCard 
                    key={ hero.id }
                    {...hero}
                  />
                ))
              }
          </div>
        </div>

    </>
  )
}

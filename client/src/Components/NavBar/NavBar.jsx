import { useNavigate } from "react-router-dom";


function NavBar({ handleSubmit, handleChange}) {

    const navigate = useNavigate();

    function handleFormButon() {
     navigate('/create')
     }; 

     function handleAboutButton(){
        navigate('/about')
     };

     function handleLandingButton(){
        navigate('/')
     }

    return (
        <nav>
            <form onSubmit={(event) => handleSubmit(event)}>  
                <input type="search" placeholder="Type in the name" onChange={(event) => handleChange(event)} />
                <button type="submit">Search</button>
            </form>

            <button onClick={handleFormButon}>Create new Game</button>
            <button onClick={handleAboutButton}>About</button>
            <button onClick={handleLandingButton}>Go to landing Page</button>

        </nav>
    );
}


export default NavBar;

//! El from recibe el handleSubmit significa que se despacha la info al hacer click o enter.
//! el onChange actualiza el estado del componente Home y ayuda a enviar el string que servira para buscar
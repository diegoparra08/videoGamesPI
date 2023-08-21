
function NavBar({ handleSubmit, handleChange}) {
    return (
        <nav>
            <form onSubmit={(event) => handleSubmit(event)}>  
                <input type="search" placeholder="Type in the name" onChange={(event) => handleChange(event)} />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
}


export default NavBar;

//! El from recibe el handleSubmit significa que se despacha la info al hacer click o enter.
//! el onChange actualiza el estado del componente Home y ayuda a enviar el string que servira para buscar
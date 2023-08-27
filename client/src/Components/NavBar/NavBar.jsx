import { useNavigate } from "react-router-dom";

import { NavBarContainer, LandingButton, ButtonsDiv, SearchButton, SearchInput, SearchForm } from './NavBar.styles';

function NavBar({ handleSubmit, handleChange }) {



    const navigate = useNavigate();

    function handleFormButon() {
        navigate('/create')
    };

    function handleAboutButton() {
        navigate('/about')
    };

    function handleLandingButton() {
        navigate('/')
    }

    return (
        <NavBarContainer>
            <SearchForm onSubmit={(event) => handleSubmit(event)}>
                <SearchInput type="search" placeholder="Type in the name" onChange={(event) => handleChange(event)} />
                <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
            <ButtonsDiv>

                <LandingButton onClick={handleLandingButton}>Go to landing Page</LandingButton>
                <LandingButton onClick={handleFormButon}>Create new Game</LandingButton>
                <LandingButton onClick={handleAboutButton}>About</LandingButton>

            </ButtonsDiv>



        </NavBarContainer>
    );
}


export default NavBar;

//! El from recibe el handleSubmit significa que se despacha la info al hacer click o enter.
//! el onChange actualiza el estado del componente Home y ayuda a enviar el string que servira para buscar
import { useState } from 'react';

import { SingleButtonPag, ButtonNextPrev, PagContainerDiv } from "./Pagination.styles";


function Pagination({ page, setPage, maximum }) {

    // const [activeButton, setActiveButton] = useState(page);
    //  const pageNumbers = [];
    // const pageNumbers = ['', '', '', '', '']
    const pageNumbers = Array.from({ length: maximum }, (_, index) => index + 1);

    function handlePrev() {
        if (page > 1) {
            setPage(page - 1)
            // setActiveButton(page - 1);
        }
    }

    function handleNext() {
        if (page < maximum) {
            setPage(page + 1)
            // setActiveButton(page + 1);
        }
    }

    return (
        <PagContainerDiv>
            <ButtonNextPrev onClick={handlePrev}>Prev</ButtonNextPrev>
            {pageNumbers.map((pageNumber) => (
                // <SingleButtonPag key={pageNumber} isActive={pageNumber === activeButton} 
                // onClick={()=> {setPage(pageNumber); setActiveButton(pageNumber);}}>{pageNumber}</SingleButtonPag>
                <SingleButtonPag
                    key={pageNumber}
                    isActive={pageNumber === page} // Aquí determinamos la activación directamente en base al estado de la página
                    onClick={() => setPage(pageNumber)}
                >{pageNumber}</SingleButtonPag>
            ))}
            <ButtonNextPrev onClick={handleNext}>Next</ButtonNextPrev>

        </PagContainerDiv>
    )
};

export default Pagination;




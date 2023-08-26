
function Pagination({ page, setPage, maximum }){
//  const pageNumbers = [];
// const pageNumbers = ['', '', '', '', '']
 const pageNumbers = Array.from({ length: maximum }, (_, index) => index + 1);

 function handlePrev(){
    if(page > 1 ){
        setPage(page -1)
    }
 }

 function handleNext(){
    if (page < maximum ) {
        setPage(page + 1)
    }
 }

 return (
    <div>
        <button onClick={handlePrev}>Prev</button>
        {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={()=> setPage(pageNumber)}>{pageNumber}</button>
        ))}
        <button onClick={handleNext}>Next</button>

    </div>
 )
};

export default Pagination;

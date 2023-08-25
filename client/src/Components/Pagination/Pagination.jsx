
function Pagination({ setPage, maximum }){
//  const pageNumbers = [];

//  const pageCount = Math.max(setPage, 1);
 const pageNumbers = Array.from({ length: maximum }, (_, index) => index + 1);

//  for (let i = 1; i < pageCount; i++) {
//    pageNumbers.push(i)
//  };


 return (
    <div>
        {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={()=> setPage(pageNumber)}>{pageNumber}</button>
        ))}

    </div>
 )
};

export default Pagination;

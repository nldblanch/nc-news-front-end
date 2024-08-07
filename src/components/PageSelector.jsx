import "../css/PageSelector.css"
export const PageSelector = ({setPage, limit, totalCount, page}) => {

    
    const numberOfPages = Math.ceil(totalCount/limit)
    const pageNumbers = Array.from({ length: numberOfPages }, (v, index) => index + 1)
    const handleClick = (event) => {
      setPage(event.target.value)
    }
  return (
    <div className="page-selector">
        <ul>
            {pageNumbers.map((pageNumber) => {
              return <li style={pageNumber === page ? {backgroundColor: "rgba(128, 128, 128, 0.301)"} : {}} key={pageNumber} value={pageNumber} onClick={handleClick}>{pageNumber}</li>
            })}
        </ul>
    </div>
  )
}
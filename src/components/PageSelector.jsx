export const PageSelector = ({ setPage, limit, totalCount, page }) => {
  const numberOfPages = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from(
    { length: numberOfPages },
    (v, index) => index + 1
  );
  const handleClick = (event) => {
    setPage(event.target.value);
  };
  return (
    <div className="mt-2 md:mt-0 md:ml-2">
      <ul className="flex justify-center">
        {pageNumbers.map((pageNumber) => {
          return (
            <li
              className="w-6 rounded-3xl aspect-square"
              style={
                pageNumber === page
                  ? { backgroundColor: "rgba(128, 128, 128, 0.301)" }
                  : {}
              }
              key={pageNumber}
              value={pageNumber}
              onClick={handleClick}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

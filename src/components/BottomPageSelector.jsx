export const BottomPageSelector = ({ setPage, limit, totalCount, page }) => {
  const numberOfPages = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from(
    { length: numberOfPages },
    (v, index) => index + 1
  );
  const handleClick = (event) => {
    setPage(event.target.value);
  };
  return (
    <div className="pt-6 w-dvw md:mt-0 md:ml-2">
      <ul className="flex justify-center">
        {pageNumbers.map((pageNumber) => {
          return (
            <li
              className="w-6 rounded-3xl aspect-square hover:bg-slate-200 active:bg-slate-300"
              style={
                pageNumber === page
                  ? { backgroundColor: "rgba(226, 232, 240)" }
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

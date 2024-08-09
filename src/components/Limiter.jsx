export const Limiter = ({ setLimit }) => {
  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  return (
    <div className="mt-2 sm:mt-0">
      <label className="pr-2 lg:text-xl" htmlFor="limit-drop-down">
        Showing
      </label>
      <select
        className="rounded px-2 text-left border border-solid border-slate-400"
        onChange={handleChange}
        id="limit-drop-down"
      >
        <option value="10">10 results per page</option>
        <option value="5">5 results per page</option>
        <option value="25">25 results per page</option>
      </select>
    </div>
  );
};

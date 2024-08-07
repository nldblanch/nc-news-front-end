export const Limiter = ({setLimit}) => {
  const handleChange = (event) => {
    setLimit(event.target.value)
  }
    return (
    <div className="limiter">
        <label htmlFor="limit-drop-down">Showing</label>
            <select onChange={handleChange} id="limit-drop-down">
              <option value="10">10 results per page</option>
              <option value="5">5 results per page</option>
              <option value="25">25 results per page</option>
            </select>
    </div>
  )
}
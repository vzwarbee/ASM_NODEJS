
export default function FormSearch(prop) {
    const {onSubmit, value, onCh}= prop
  return (
    <>
      <form onSubmit={onSubmit}>
          <div className="p-1">
            <label htmlFor="searchInput">Search Car Type</label>
            <input
              type="text"
              id="searchInput"
              value={value}
              onChange={onCh}
              className="form-control mt-2"
              placeholder="Enter car type..."
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
    </>
  );
}

import { useState, useEffect } from "react";
import FormSearch from "./FormSearch";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchSearchResult = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?page=1&client_id=K1Ms3ghI_IOFG50YMwZGM-JXA7FHC_RVaia-mghhqoQ&query=${term}`);
      const data = await response.json();
      setFilteredCars(data.results);
      setShowResults(true);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchSearchResult();
  };

  useEffect(() => {
    setShowResults(false);
    setFilteredCars([]);
    if (term) {
      fetchSearchResult();
    }
  }, [term]);

  return (
    <div>
      <FormSearch onSubmit={onSubmit} value={term} onCh={(e) => setTerm(e.target.value)} />
      {showResults && (
        <div>
          {filteredCars.length > 0 ? (
            <div>
              <h2>Search Results</h2>
              <ul className="d-flex gap-2 flex-wrap">
                {filteredCars.map((car) => (
                  <li key={car.id}>
                    <img src={car.urls.full} style={{ width: "15rem" }} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>No Results Found</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

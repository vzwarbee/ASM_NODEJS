import { useState, useEffect } from "react";
import FormSearch from "./FormSearch";


const SearchBar = () => {
    const [term, setTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [showResults, setShowResults] = useState(false);
  
    useEffect(() => {
      // Fetch data from cars.json or your API here
      const fetchData = async () => {
        try {
          const response = await fetch("/src/api/lab4.json"); // Thay đổi đường dẫn đến tệp JSON hoặc API tại đây
          const data = await response.json();
          setSearchResult(data);
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu từ tệp JSON hoặc API:", error);
        }
      };
      fetchData();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        // Tìm kiếm loại xe dựa vào tên nhập vào input
        const filteredCars = searchResult.filter(
          (car) => car.name.toLowerCase().includes(term.toLowerCase())
        );
        // Đặt kết quả tìm kiếm vào state "filteredCars" và hiển thị kết quả
        setFilteredCars(filteredCars);
        setShowResults(true);
      };
    
      useEffect(() => {
        // Mỗi khi "term" thay đổi, đặt lại kết quả tìm kiếm là mảng rỗng
        setFilteredCars([]);
        setShowResults(false);
      }, [term]);
  
  
    return (
      <div>
        <FormSearch onSubmit={onSubmit} value={term} onCh={(e)=> setTerm(e.target.value)}/>
        {showResults && filteredCars.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul className="d-flex gap-2">
            {filteredCars.map((car) => (
              <li key={car.id}>
                <img src={car.image} width={150} alt="" />
              </li>
            ))}
          </ul>
        </div>
      )}
      {showResults && filteredCars.length === 0 && (
        <div>
          <h2>No Results Found</h2>
        </div>
      )}
      </div>
    );
  };
  
  export default SearchBar;
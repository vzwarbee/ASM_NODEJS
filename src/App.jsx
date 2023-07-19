import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchBar from "./component/lab4/SearchForm";
import Layout from "./component/Layout";
import SeasonDisplay from "./component/lab3/SeasonDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/lab3" element={<SeasonDisplay />} />
            <Route path="/lab4" element={<SearchBar />} />
            <Route path="/lab5" element={<SearchBar />} />
            <Route path="/lab6" element={<SearchBar />} />
            <Route path="/lab7" element={<SearchBar />} />
            <Route path="/lab8" element={<SearchBar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {});

  const handleSearchSubmit = (value) => {
    setQuery(value);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
    </>
  );
};

export default App;

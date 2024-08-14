import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "./services/UnsplashAPI";
import { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const res = await fetchImages(query, page);
        setImages((prev) => [...prev, ...res.results]);
        setShowLoadMore(page < res.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
  };

  const handleButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {showLoadMore && (
        <button type="button" onClick={handleButtonClick}>
          Load More
        </button>
      )}
    </>
  );
};

export default App;

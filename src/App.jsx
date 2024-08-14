import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/serviceAPI";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchImages(query, page);

        if (!res.results.length) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...res.results]);
        setShowLoadMore(page < res.total_pages);
      } catch (error) {
        setIsError(true);
        throw new Error(error.status);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleButtonClick = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (image) => {
    console.log(image);
    setModalImage(image);

    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalImage({});
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isEmpty && (
        <ErrorMessage title={"Nothing find, please create another query"} />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}
      <ImageModal
        modalIsOpen={openModal}
        closeModal={closeModal}
        url={modalImage.url}
        alt_description={modalImage.alt_description}
      />
      {showLoadMore && <LoadMoreBtn handleButtonClick={handleButtonClick} />}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage
          title={"Something went wrong. Please, try again later!"}
        />
      )}
    </>
  );
};

export default App;

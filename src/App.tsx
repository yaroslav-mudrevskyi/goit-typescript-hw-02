import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/serviceAPI";
import { PhotoData } from "./services/serviceAPI";

export interface Modal {
  alt_description: string;
  url: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<PhotoData[]>([]);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Modal>({
    url: "",
    alt_description: "",
  });

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
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (value: string): void => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
    setIsError(false);
    setIsEmpty(false);
  };

  const handleButtonClick = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (image: Modal): void => {
    setModalImage(image);

    setOpenModal(true);
  };

  const closeModal = (): void => {
    setOpenModal(false);
    setModalImage({
      url: "",
      alt_description: "",
    });
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
          title={`Something went wrong. Please, try again later! ${isError}`}
        />
      )}
    </>
  );
};

export default App;

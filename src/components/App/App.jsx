// import { useEffect, useState } from "react";
// import { fetchPhotos } from "../PhotoSearch";
// import SearchBar from "../SearchBar/SearchBar";
// import ImageGallery from "../ImageGallery/ImageGallery";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "../ImageModal/ImageModal";

// export default function App() {
//   const [photos, setPhotos] = useState([]);
//   const [isLoading, setİsloading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [modalİsOpen, setModalİsOpen] = useState(false);
//   const [selectedİmage, setSelectedİmage] = useState(null);

//   const handleSearch = async (topic) => {
//     setSearchTerm(`${topic}/${Date.now()}`);

//     setPage(1);
//     setPhotos([]);
//   };

//   const handleClick = () => {
//     setPage(page + 1);
//   };
//   const openModal = (item) => {
//     setSelectedİmage(item);
//     setModalİsOpen(true);
//   };

//   const closeModal = () => {
//     setModalİsOpen(false);
//   };

//   useEffect(() => {
//     if (searchTerm === "") {
//       return;
//     }
//     async function getData() {
//       try {
//         setError(false);
//         setİsloading(true);
//         const data = await fetchPhotos(searchTerm.split("/")[0], page);
//         setPhotos((prevPhotos) => {
//           return [...prevPhotos, ...data];
//         });
//       } catch {
//         setError(true);
//       } finally {
//         setİsloading(false);
//       }
//     }
//     getData();
//   }, [page, searchTerm]);

//   return (
//     <>
//       <SearchBar onSearch={handleSearch} />
//       {error && <ErrorMessage />}

//       {photos.length > 0 && (
//         <ImageGallery items={photos} onImageClick={openModal} />
//       )}

//       <ImageModal
//         isOpen={modalİsOpen}
//         onClose={closeModal}
//         image={selectedİmage}
//       />

//       {isLoading && <Loader />}

//       {photos.length > 0 && !isLoading && (
//         <LoadMoreBtn handleClick={handleClick} />
//       )}
//     </>
//   );
// }




import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageModal from '../ImageModal/ImageModal';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchImages } from '../../services/unsplashAPI';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
        setTotalPages(Math.ceil(data.total / 12));
      } catch (err) {
        setError('Failed to fetch images. Try again later.');
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && <ImageGallery images={images} onImageClick={handleImageClick} />}
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && <ImageModal isOpen={!!selectedImage} onRequestClose={closeModal} image={selectedImage} />}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
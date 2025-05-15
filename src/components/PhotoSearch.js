// import axios from "axios";

// export const fetchPhotos = async (topic, currentPage) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?client_id=SDdus_L-2oATcnD6jLgUwbLq6gPjNKxLCEuAo_e6nIA`,
//     {
//       params: {
//         query: topic,
//         per_page: 6,
//         page: currentPage,
//       },
//     }
//   );
//   return response.data.results;
// };



// import axios from 'axios';

// const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// export const fetchImages = async (query, page = 1, perPage = 12) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos`,
//     {
//       params: {
//         query,
//         page,
//         per_page: perPage,
//         client_id: ACCESS_KEY,
//       },
//     }
//   );
//   return response.data;
// };
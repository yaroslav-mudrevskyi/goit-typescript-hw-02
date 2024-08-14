import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.unsplash.com",
});

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "Po1kpKaZuBVBPrRi4iVbBKdTRagW4PKMi69IknKsRuY",
      query,
      orientation: "landscape",
      page,
      per_page: 20,
    },
  });
  return response.data;
};

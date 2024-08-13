import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.unsplash.com",
});

export const fetchImages = async (query, page = 1) => {
  const res = await axios.get("/photos", {
    params: {
      client_id: "Po1kpKaZuBVBPrRi4iVbBKdTRagW4PKMi69IknKsRuY",
      query,
      orientation: "horizontal",
      page,
      per_page: 15,
    },
  });
  return res.data;
};

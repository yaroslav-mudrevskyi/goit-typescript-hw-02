import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.unsplash.com",
});

export interface Urls {
  small: string;
  regular: string;
}

export interface PhotoData {
  id: string;
  alt_description: string;
  urls: Urls;
}

export interface SearchPhoto {
  total: number;
  total_pages: number;
  results: PhotoData[];
}

export const fetchImages = async (
  query: string,
  page: number
): Promise<SearchPhoto> => {
  const response = await axios.get<SearchPhoto>("/search/photos", {
    params: {
      client_id: "Po1kpKaZuBVBPrRi4iVbBKdTRagW4PKMi69IknKsRuY",
      query,
      orientation: "landscape",
      page,
      per_page: 20,
    },
  });
  console.log(response.data);

  return response.data;
};

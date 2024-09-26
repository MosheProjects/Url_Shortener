import axiosInstance from "./axiosInstance";

export const shorten = async (origUrl: string) => {
  return await axiosInstance.post("/shorten", {
    origUrl: origUrl,
  });
};

export const redirectToOrig = async (id: string) => {
  return await axiosInstance.get(`/${id}`);
};

export const getAllUrls = async () => {
  return await axiosInstance.get('/allUrls');
};

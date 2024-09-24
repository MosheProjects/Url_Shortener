import axiosInstance from "./axiosInstance";

export const shorten = async (origUrl: string) => {
  return await axiosInstance.post("/shorten", {
    origUrl: origUrl,
  });
};

export const redirect = async (id: string) => {
  return await axiosInstance.get(`/${id}`);
};

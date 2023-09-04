import type { Country } from "../api";

const API_URL = "https://restcountries.com/v3.1/all";

export const getData = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data as Country[];
};

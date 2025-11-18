import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1/";

export const searchByName = (name) => axios.get(`${API}search.php?s=${name}`);
export const filterByCategory = (cat) => axios.get(`${API}filter.php?c=${cat}`);
export const filterByIngredient = (ing) => axios.get(`${API}filter.php?i=${ing}`);
export const listCategories = () => axios.get(`${API}list.php?c=list`);
export const listIngredients = () => axios.get(`${API}list.php?i=list`);
export const getMealDetails = (id) => axios.get(`${API}lookup.php?i=${id}`);

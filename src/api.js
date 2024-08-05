import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nc-news-bxej.onrender.com/api",
  timeout: 1000,
});

export const getArticles = () => {
  return apiClient
  .get("/articles")
  .then(({data}) => {
    return data.articles
  })
}
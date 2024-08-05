import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nc-news-bxej.onrender.com/api",
  timeout: 2000,
});

export const getArticles = () => {
  return apiClient
  .get("/articles")
  .then(({data}) => {
    return data.articles
  })
}

export const getArticleById = (id) => {
  return apiClient
  .get(`/articles/${id}`)
  .then(({data}) => {
    return data.article
  })
}
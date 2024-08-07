import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nc-news-bxej.onrender.com/api"
});

export const getArticles = ({topic, sort_by, order, limit, p}) => {
  return apiClient
  .get("/articles", {params: {topic, sort_by, order, limit, p}})
  .then(({data}) => {
    return data
  })
}

export const getArticleById = (id) => {
  return apiClient
  .get(`/articles/${id}`)
  .then(({data}) => {
    return data.article
  })
  // .catch((error) => {
  //   console.log(error, "First error Nathan!")
  // })
}

export const getArticleComments = (id) => {
  return apiClient
  .get(`/articles/${id}/comments`)
  .then(({data}) => {
    return data.comments
  })
}

export const postLike = (id, like) => {
  return apiClient
  .patch(`/articles/${id}`, {inc_votes: like})
  .then(({data} ) => {
    return data.article
  })
}

export const postComment = (id, comment) => {
  return apiClient
  .post(`/articles/${id}/comments`, comment)
  .then(({data}) => {
    return data.comment
  })
}

export const deleteComment = (id) => {
  return apiClient
  .delete(`/comments/${id}`)
}
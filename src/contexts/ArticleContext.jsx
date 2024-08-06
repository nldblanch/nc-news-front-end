import { createContext, useState } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articleId, setArticleId] = useState();

  return (
    <ArticleContext.Provider value={{ articleId, setArticleId }}>
      {children}
    </ArticleContext.Provider>
  );
};

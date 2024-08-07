import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Article } from "./pages/Article";
import { ArticleProvider } from "./contexts/ArticleContext";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostArticlePage } from "./pages/PostArticlePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/articles/:article_id"
          element={
            <ArticleProvider>
              <Article />
            </ArticleProvider>
          }
        />
        <Route path="/post" element={<PostArticlePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

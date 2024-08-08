import netlifyIdentity from "netlify-identity-widget";
import "../css/PostArticlePage.css";
import { postArticle } from "../api";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";
export const PostArticlePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const title = event.target[0].value;
    const topic = event.target[1].value;
    const article_img_url = event.target[2].value;
    const body = event.target[3].value;
    const author = netlifyIdentity.currentUser().user_metadata.full_name;
    postArticle({
      author,
      title,
      body,
      topic,
      article_img_url,
    }).then((article) => {
      setIsLoading(false);
      navigate(`/articles/${article.article_id}`);
    });
  };
  return (
    <main className="pt-36 h-dvh">
      <form className="flex flex-col px-2 py-6 h-full items-center mx-auto max-w-3xl" onSubmit={handleSubmit} id="upload-article" >
      <h2 className="text-2xl font-medium">Upload an article</h2>
        <label className="mt-2 text-xl" htmlFor="post-article-title">Title</label>
        <input className="shadow-lg outline outline-1 outline-slate-200 text-center w-full" id="post-article-title" required />
        <label className="mt-6 text-xl" htmlFor="post-article-topic">Topic</label>
        <select className="shadow-lg outline outline-1 outline-slate-200 text-center w-full" id="post-article-topic" required>
          <option>coding</option>
          <option>football</option>
          <option>cooking</option>
        </select>
        <label className="mt-6 text-xl " htmlFor="post-article-image">Image</label>
        {/* <input id="post-article-image" type="file" /> */}
        <input className="shadow-lg outline outline-1 outline-slate-200 text-center w-full" id="post-article-image" type="url" required />
        <label className="mt-6 text-xl" htmlFor="post-article-body">Body</label>
        <textarea
        className="shadow-lg outline outline-1 outline-slate-200 text-center w-full grow"
          id="post-article-body"
          required
        ></textarea>
        <button className="bg-slate-200 active:bg-slate-300 w-fit mt-4 py-2 px-4 rounded-3xl" type="submit" id="post-article-submit">
          Submit
        </button>
      </form>
      {isLoading && (
        <div >
          <Loading />
        </div>
      )}
    </main>
  );
};
//test information for submission
//How AI is taking over photography
// https://images.unsplash.com/photo-1722031489919-100378463cfc?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

// Robots can't replace the creativity of the human eye. AI, however, can do incredible things at speeds faster than human hands. Take for example photo editing - to modify a photo, remove something, brighten up the sky or remove shadows in the background - professional photo editors can do these quickly. AI can do it five times faster. While it hasn't been able to replicate the intricacy and quality of real photo editors, it has gotten pretty close. Who knows what the future holds for photography.

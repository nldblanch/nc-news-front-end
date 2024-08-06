import { useState } from "react";

import "../css/Home.css";
import { useSearchParams } from "react-router-dom";
import { HomePageArticles } from "../components/HomePageArticles";
export const Home = () => {
  const [totalCount, setTotalCount] = useState();
  const [searchParams] = useSearchParams();
  const [sort_by, setSortBy] = useState();
  const [order, setOrder] = useState();

  const topic = searchParams.get("topic");
  const handleChange = (event) => {
    const sortQuery = event.target.value;
    if (sortQuery.includes("date")) {
      setSortBy("created_at");
    }
    if (sortQuery.includes("votes")) {
      setSortBy("votes");
    }
    if (sortQuery.includes("ascending")) {
      setOrder("asc");
    } else if (sortQuery.includes("descending")) {
      setOrder("desc");
    }
  };
  const homePageProps = { setTotalCount, topic, sort_by, order };

  return (
    <>
        <div id="sort-articles">
          <h2>Showing {totalCount} articles</h2>
          <form id="sort-queries">
            <label htmlFor="sort-by-drop-down">Sort these articles by</label>
            <select onChange={handleChange} id="sort-by-drop-down">
              <option value="date-descending">Date (newest first)</option>
              <option value="date-ascending">Date (oldest first)</option>
              <option value="comments-descending">Comments (most first)</option>
              <option value="comments-ascending">Comments (least first)</option>
              <option value="votes-descending">Votes (highest)</option>
              <option value="votes-ascending">Votes (lowest)</option>
            </select>
          </form>
        </div>
      <main id="articles">
        <HomePageArticles props={homePageProps} />
      </main>
    </>
  );
};

import { useState } from "react";

import "../css/Home.css";
import { useSearchParams } from "react-router-dom";
import { HomePageArticles } from "../components/HomePageArticles";
import { PageSelector } from "../components/PageSelector";
import { Limiter } from "../components/Limiter";
export const Home = () => {
  const [totalCount, setTotalCount] = useState();
  const [searchParams] = useSearchParams();
  const [sort_by, setSortBy] = useState();
  const [order, setOrder] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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
  const homePageProps = { setTotalCount, topic, sort_by, order, page, limit };

  return (
    <>
      <div id="sort-articles">
        <h2>Showing {totalCount} articles</h2>
        <form id="sort-queries">
          <div id="sort-query-selector">
            <label htmlFor="sort-by-drop-down">Sort these articles by</label>
            <select onChange={handleChange} id="sort-by-drop-down">
              <option value="date-descending">Date (newest first)</option>
              <option value="date-ascending">Date (oldest first)</option>
              <option value="comments-descending">Comments (most first)</option>
              <option value="comments-ascending">Comments (least first)</option>
              <option value="votes-descending">Votes (highest)</option>
              <option value="votes-ascending">Votes (lowest)</option>
            </select>
          </div>
          <div className="pagination">
          <Limiter setLimit={setLimit} />
          <PageSelector
            page={page}
            totalCount={totalCount}
            limit={limit}
            setPage={setPage}
            />
            </div>
        </form>
      </div>
      <main id="articles">
        <HomePageArticles props={homePageProps} />
      </main>
    </>
  );
};

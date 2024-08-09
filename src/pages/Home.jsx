import { useState } from "react";

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
  const homePageProps = {
    totalCount,
    setTotalCount,
    topic,
    sort_by,
    order,
    page,
    setPage,
    limit,
  };

  return (
    <>
      <div className="mt-36 w-dvw sm:px-4">
        <h2 className="text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
          Showing {totalCount} articles{" "}
          {topic && (
            <span>
              from <strong>{topic}</strong>
            </span>
          )}
        </h2>
        <form className="flex flex-col text-center w-full sm:flex-row sm:justify-between">
          <div>
            <label className="pr-2 lg:text-xl" htmlFor="sort-by-drop-down">
              Sort these<span className="max-sm:hidden">&nbsp;articles by</span>
            </label>
            <select
              className="rounded px-2 text-left border border-solid border-slate-400"
              onChange={handleChange}
              id="sort-by-drop-down"
            >
              <option value="date-descending">Date (newest first)</option>
              <option value="date-ascending">Date (oldest first)</option>
              <option value="comments-descending">Comments (most first)</option>
              <option value="comments-ascending">Comments (least first)</option>
              <option value="votes-descending">Votes (highest)</option>
              <option value="votes-ascending">Votes (lowest)</option>
            </select>
          </div>
          <div className="md:flex md:flex-row">
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

      <HomePageArticles props={homePageProps} />
    </>
  );
};

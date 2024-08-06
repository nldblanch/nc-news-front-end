import { useState } from "react";
import { ArticleComments } from "./ArticleComments"
import { PostComment } from "./PostComment"

export const CommentsSection = ({article_id}) => {
    const [comments, setComments] = useState();
    return (
        <>
            <PostComment article_id={article_id} setComments={setComments} />
            <ArticleComments article_id={article_id} comments={comments} setComments={setComments} />
        </>
    )
}
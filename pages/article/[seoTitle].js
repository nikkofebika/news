import React from "react";
import { useRouter } from "next/router";
import { Row } from "react-bootstrap";

const articleDetail = ({ article }) => {
  return (
    <main role="main" className="container">
      <Row>
        <div className="col-md-12 blog-main">
          <div className="blog-post">
            <h2 className="blog-post-title">{article.title}</h2>
            <p className="blog-post-meta">
              January 1, 2014 by <a href="#">Mark</a>
            </p>
            {article.description}
          </div>
        </div>
      </Row>
    </main>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    "http://localhost:4000/v1/articles/get_by_seotitle/" +
      context.params.seoTitle
  );
  const article = await res.json();
  return {
    props: {
      article: article.data,
    },
  };
}

export default articleDetail;

import React from "react";
import { Link } from "react-router-dom";

const postsData = require("./_posts.json");

/**
 * This page includes navigation (nested Routers)
 */
export default function Blog() {
  const posts = postsData.map(post => {
    return (
      <Link to={"/post/" + post.slug} key={post.slug}>
        <div className="post-listing">
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });

  return <div className="blog">{posts}</div>;
}

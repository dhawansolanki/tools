import React from "react";
import { useParams } from "react-router";

/**
 * Renders a post
 */

// read post data
const postsData = require("./_posts.json");

export default function Post() {
  var { slug } = useParams(),
    post = findPostBySlug(slug);

  return (
    <div className="post-content-view">
      <h1 className="title">{post.title}</h1>
      <content>{post.content}</content>
      <h2>Author : {post.author.name}</h2>
      <h2>Author ID : {post.author.id}</h2>
    </div>
  );
}

function findPostBySlug(slug) {
  return postsData.find(o => o.slug === slug);
}

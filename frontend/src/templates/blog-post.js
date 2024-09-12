// src/templates/blog-post.js

import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const BlogPostTemplate = ({ data }) => {
  const post = data.prismaPost

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keyword} />
      </Helmet>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export const query = graphql`
  query($id: Int!) {
    prismaPost(id: { eq: $id }) {
      id
      title
      content
      metaDescription
      summary
      keyword
    }
  }
`

export default BlogPostTemplate

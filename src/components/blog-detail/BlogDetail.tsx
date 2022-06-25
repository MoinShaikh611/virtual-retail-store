import { withPrefix } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import AsSeenOn from "../AsSeenOn";
import FourLinesBar from "../common/FourLinesBar";
import Footer from "../Footer";
import BlackHeader from "../header/BlackHeader";
import BlogIntro from "./BlogIntro";
import BlogSecondSection from "./BlogSecondSection";
import Tags from "./Tags";

function BlogDetail({ pageContext }) {
  return (
    <>
      <Helmet>
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link
          rel="stylesheet"
          href={withPrefix("/styles/blog-detail/BlogDetailMain.css")}
        />
      </Helmet>
      <BlackHeader></BlackHeader>
      <div className="BlogDetail__Wrapper">
        <BlogIntro pageContext={pageContext}></BlogIntro>
        <BlogSecondSection pageContext={pageContext}></BlogSecondSection>
        <FourLinesBar></FourLinesBar>
        <Tags></Tags>
        <AsSeenOn></AsSeenOn>
        <Footer></Footer>
      </div>
    </>
  );
}

export default BlogDetail;

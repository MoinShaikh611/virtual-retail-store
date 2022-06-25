import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import BlogIntro from "../components/blog/BlogIntro";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import RecentlyPosted from "../components/blog/RecentlyPosted";
import BlogList from "../components/blog/BlogList";
import FourLinesBar from "../components/common/FourLinesBar";
import AsSeenOn from "../components/AsSeenOn";
import Footer from "../components/Footer";
import WhiteHeader from "../components/header/WhiteHeader";

function blog() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/blog/BlogMain.css")} />
      </Helmet>
      <WhiteHeader></WhiteHeader>
      <div className="Blog__Wrapper">
        <BlogIntro></BlogIntro>
        <FeaturedBlog></FeaturedBlog>
        <RecentlyPosted></RecentlyPosted>
        <BlogList></BlogList>
        <FourLinesBar></FourLinesBar>
        <AsSeenOn></AsSeenOn>
        <Footer></Footer>
      </div>
    </>
  );
}

export default blog;

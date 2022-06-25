import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

function BlogList() {
  const [noOfBlogs, setNoOfBlogs] = useState(3);
  const [disableLoadMore, setDisableLoadMore] = useState(false);
  const loadMoreBlogs = () => {
    setNoOfBlogs(noOfBlogs + 3);
    if (data.card.length === noOfBlogs + 3) {
      setDisableLoadMore(!disableLoadMore);
    }
  };

  const data = {
    card: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
    ],
  };
  const blogInRow = data.card.slice(0, noOfBlogs);

  // {blogInRow.map((item, index) => (
  //   <div key={index}>{item.id}</div>
  // ))}

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href={withPrefix("/styles/blog/BlogList.css")} />
      </Helmet>
      <div className="BlogList-Wrapper">
        <div className="BlogList-Item-Container">
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogList-Item">
            <div className="BlogList-Item-Row1">
              <StaticImage
                className="BlogList-Item-Image"
                src="../../images/blog/BlogList/blog-1.png"
                alt="blog-item"
              ></StaticImage>
            </div>
            <div className="BlogList-Item-Row2">
              <div className="BlogList-Item-Row2-Container">
                <div className="BlogList-Item-Row2-tag-and-date">
                  <p>Technology</p>
                  <p>&bull;</p>
                  <p>Jan 16, 2022</p>
                </div>
                <div className="BlogList-Item-Row2-Title">
                  <h1>Consectetuer adipiscing elit, sed diam nonummy nibh.</h1>
                </div>
                <div className="BlogList-Item-Row2-content">
                  Ulputate velit esse molestie conseq at, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et.....
                </div>
                <div className="BlogList-Item-Row2-Read-More-Wrapper">
                  <p>Read More </p>
                  <StaticImage
                    src="../../images/blog/icons/read-more-icon.png"
                    alt="read-more"
                  ></StaticImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="BlogList-Load-More-Btn-Container">
          <button disabled={disableLoadMore} onClick={loadMoreBlogs}>
            Load More
          </button>
        </div> */}
      </div>
    </>
  );
}

export default BlogList;

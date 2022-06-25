const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const industryData = graphql(`
    query {
        allFile(
          filter: {relativeDirectory: {eq: "industry-case-study"}, sourceInstanceName: {eq: "data"}}
        ) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                introTitle
                introPara
                introExploreLink
                introImage
                challengeTitle
                challengeTag
                challengeDate
                challengeList
                solutionList
                featuresList
                projectGalleryImageNames
                slug
              }
            }
          }
        }
        IntroImages: allFile(
          filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "IndustryCaseStudy/IntroImages"}}
        ) {
          nodes {
            childImageSharp {
              gatsbyImageData
            }
            name: base
          }
        }
        
          ProjectGalleryImages: allFile(
          filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "IndustryCaseStudy/ProjectGalleryImages"}}
        ) {
          nodes {
            childImageSharp {
              gatsbyImageData
            }
            name: base
          }
        }
      }      
    `).then(result => {
    result.data.allFile.nodes.forEach((industry) => {
      const introImages = result.data.IntroImages.nodes.find(
        (img) => img.name === industry.childMarkdownRemark.frontmatter.introImage
      );
      const projectGalleryImages = result.data.ProjectGalleryImages.nodes;
      createPage({
        path: "/industry-case-study/" + industry.childMarkdownRemark.frontmatter.slug,
        component: path.resolve("./src/components/industry-case-study/IndustryCaseStudy.tsx"),
        context: {
          introTitle: industry.childMarkdownRemark.frontmatter.introTitle,
          introPara: industry.childMarkdownRemark.frontmatter.introPara,
          introExploreLink: industry.childMarkdownRemark.frontmatter.introExploreLink,
          challengeTitle: industry.childMarkdownRemark.frontmatter.challengeTitle,
          challengeTag: industry.childMarkdownRemark.frontmatter.challengeTag,
          challengeDate: industry.childMarkdownRemark.frontmatter.challengeDate,
          challengeList: industry.childMarkdownRemark.frontmatter.challengeList,
          solutionList: industry.childMarkdownRemark.frontmatter.solutionList,
          featuresList: industry.childMarkdownRemark.frontmatter.featuresList,
          featuresList: industry.childMarkdownRemark.frontmatter.featuresList,
          projectGalleryImageNames: industry.childMarkdownRemark.frontmatter.projectGalleryImageNames,
          slug: industry.childMarkdownRemark.frontmatter.slug,
          introImages,
          projectGalleryImages
        }
      })
    })
  })

  const blogData = graphql(`
  query  {
    allFile(
      filter: {relativeDirectory: {eq: "blog"}, sourceInstanceName: {eq: "data"}}
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
  
  `).then(result => {
    result.data.allFile.nodes.forEach((blog) => {
      createPage({
        path: "/blog/" + blog.childMarkdownRemark.frontmatter.slug,
        component: path.resolve("./src/components/blog-detail/BlogDetail.tsx"),
        context: {
          title: blog.childMarkdownRemark.frontmatter.title,
          slug: blog.childMarkdownRemark.frontmatter.slug
        }
      })
    })
  })

  return Promise.all([industryData, blogData])
}

import React , {useState}from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { SinglePost, PostInfo, PreTitle, Title, Subtitle, Update, Freshnew, Excrept, Card, CardColumns }  from "../components/style/emo-home-posts";
import styles from './usluge.module.css'

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let months = days * 30;

export default ({ data }) => {
  const Products = data.allMarkdownRemark.edges;
  
  const [filterDisplay, setFilterDisplay] = useState(Products);

  const handleChange = e => {
    let oldProducts = [];
    let newProducts = [];
    
    if(e !== "")
    {
      oldProducts = Products;

      newProducts = oldProducts.filter(item => {   
        //user input to lower case
        const filter = e.toLowerCase();  
      
        //item title to lower case
        const lc = item.node.frontmatter.title.toLowerCase();        

        //tags array to lower case
        const tagFilter = item.node.frontmatter.tags;
        let tagFilterLC = tagFilter.map(item => item.toLowerCase())
        let tagTrue = false;
        tagFilterLC.forEach(item => {
          if(item.includes(filter))
            tagTrue = true;
        })
        
        return (lc.includes(filter) || tagTrue);
        }
      )
      setFilterDisplay(newProducts);
    }
    else
    {
      setFilterDisplay(Products);
    }
    }
  

  return (
    <Layout>
      <div className = {styles.SearchStyle}><input onChange = {e => handleChange(e.target.value)}></input></div>
      <CardColumns>
        {filterDisplay.map(({ node }) => (
          <Card key={node.id}>
            <Link to={node.fields.slug}>
              <SinglePost>
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	               node.frontmatter.update !== node.frontmatter.date &&(
                  <Update>Update</Update>
                )}
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	              node.frontmatter.update === node.frontmatter.date &&(
		              <Freshnew>Fresh New</Freshnew>
	              )}
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <PostInfo>
                  <PreTitle>{node.frontmatter.category}</PreTitle>
                  <Title>{node.frontmatter.title}</Title>
	                <Subtitle></Subtitle>
                  <Excrept>{node.excerpt}</Excrept>
                </PostInfo>
              </SinglePost>
            </Link>
          </Card>
        ))}
      </CardColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___update], order: DESC }
      filter: { frontmatter: { category: { eq: "Product" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            title
            subtitle
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
        }
      }
    }
  }
`

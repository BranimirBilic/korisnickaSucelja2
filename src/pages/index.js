import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePost from "../components/homepost"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />  
      
        <HomePost/>
       
  </Layout>
)

export default IndexPage

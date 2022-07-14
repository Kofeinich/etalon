import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import Footer from "../components/footer/Footer";
import "../templates/css/normalise.css"

const IndexPage = () => (
  <>
      <Seo title="Юридические услуги в Новороссийске" />
      <Footer/>
  </>
)

export default IndexPage

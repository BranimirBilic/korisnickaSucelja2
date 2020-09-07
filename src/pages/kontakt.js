import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MapSection from '../components/map/Map' 
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Input from '../components/input/input'
import style from './kontakt.module.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} 

const KontaktPage = () => (
  <Layout>
    <SEO title="Home" />  
    <MapSection location={location} zoomLevel={17} /> 
    <div className= {style.Grid}>
    <div>
      <div>
          <h3>DRUŠTVENE MREŽE</h3>
          <SocialMediaIconsReact icon="twitter" url="https://google.com"/>
          <SocialMediaIconsReact icon="instagram" url="https://google.com"/>
          <SocialMediaIconsReact icon="facebook" url="https://google.com"/>
        </div>
        <div>
          <h3>KONTAKT</h3>
          <p>Poljička cesta 26a, 21000, Split</p>
          <p>00 385 99 482 7567</p>
          <p>info@dentech</p>
        </div>
    </div>
    <div >
    <h3>POSTAVITE NAM PITANJE</h3>
      <form className= {style.Form}>
                
          <Input placeholder = "Ime i Prezime"/>
          <Input placeholder = "Vaša e-pošta (obavezno)"/>
          <Input placeholder = "Predmet"/>
          <textarea className= {style.TextArea} />
      </form>
    </div>
    </div>
      
  </Layout>
)

export default KontaktPage

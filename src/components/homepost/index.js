import React from 'react'
import Img from "gatsby-image"
import {useStaticQuery, graphql } from "gatsby"
import styles from './styles.module.css'
import styled from "styled-components"

function HomePost() {
    const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "dr" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 500, pngQuality: 80) {
            ...GatsbyImageSharpFluid
             }
            }
         }
        }
    `)
    return (
        <div className = {styles.DivStyles} >
            <br/>
            <div className = {styles.TextDiv}>                 
            <br/>
                <p>               
                    <h3>
                        VODEĆI DENTALNI CENTAR U SPLITU
                    </h3>
                        Tim naše dentalne klinike čine vrhunski i uvijek nasmijani stomatolozi, dentalni asistenti, 
                        dentalni tehničari i specijalisti za odnose s našim klijentima. Smješteni smo u Splitu i 
                        opremljeni najmodernijom opremom koja vam pruža sve stomatološke usluge.
                        Od dijagnostike do potpuno novog osmijeha na jednom mjestu – štedimo vaše vrijeme i 
                        novac! Dio naše klinike je i moderni CAD/CAM laboratorij kojim upravljaju stručni dentalni 
                        tehničari što jamči visoku kvalitetu u svim područjima stomatološke zaštite.
                        Od prvog telefonskog poziva do završetka terapije, uvažavamo činjenicu da je svaki pacijent osoba s individualnim potrebama i željama. Imajući to na umu, naši stručnjaci pridaju veliki značaj suradnji s pacijentom, kako bi mogli ponuditi rješenja za koja vjerujemo da su za individualni slučaj najprikladnija.
                        Naš prioritet je da slušamo vaše želje i vratimo vam osmijeh na lice kakav ste uvijek sanjali.
                        DR. MIA ROGLIĆ, STOMATOLOG
                </p>
            </div>
            <div className = {styles.TextDiv}>
                <Img fluid={data.file.childImageSharp.fluid} style = {{width:"70%","margin-left":"25%"}} alt="logo"/>
            </div>                            
        </div>
    )
}

export default HomePost

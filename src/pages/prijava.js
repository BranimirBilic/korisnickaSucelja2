import React , {useState, setState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./prijava.module.css"
import {Link, navigate} from 'gatsby'
import Input from '../components/input/input'
//import { Redirect, Route } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Termin from './termin.js'
/*
const Prijava = (props) => {
  const [state , setState] = useState({
    email : "Email adresa",
    password : "Lozinka"
    })
   
    
    
    

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === "a"|| state.email === "a")
        {
            navigate('/termin');
        }
    }
    return (
    <Layout>
        <SEO title="Home" /> 
        <div className = {styles.DivStyle}>
            <form className = {styles.Container}>                
                <input type = "text" placeholder = {state.email} onChange={handleChange}/>               
                <input type = "password" placeholder = {state.password} onChange={handleChange}/>

                <button 
                    type="submit" 
                    className={styles.Button}
                    onClick={handleSubmitClick}
                >Prijava</button>
                
                <Link to = "/registracija"> Nemate profil? Registrajte se preko ovog linka.</Link>             
            </form>
            </div>
      </Layout>
    )
  
}

export default Prijava*/

const user = {
  name: "Ivan",
  lastname: "Bralić",
  password: 'p',
  email: 'e',
};


class Prijava extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "email",
      password: "password",
      errorMsg: undefined
    };}

    onUserChange = event => {
      this.setState({ email: event.target.value });
    };
    onPasswordChange = event => {
      this.setState({ password: event.target.value });
    };

    onSubmitClick = event => {
      event.preventDefault();
      const {email, password} = this.state;
      if(email === user.email && password === user.password) {  
          navigate('/termin');
      } 
      else
      alert("Podatci nisu uspješno uneseni");
    };

  render() {
    return (
      <Layout>
        <div className = {styles.DivStyle}>
          <form onSubmit={this.handleSubmit} className = {styles.Container}>
          <label style = {{"margin-top": "30px"}}>
            email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" value={this.state.value} onChange={this.onUserChange} />
          </label>
          <label>
            password: &nbsp;
            <input type="password" value={this.state.value} onChange={this.onPasswordChange} />
          </label>
          <button 
                    type="submit" 
                    className={styles.Button}
                    onClick={this.onSubmitClick}
                >Prijava</button>
          <Link style = {{"margin-bottom": "30px"}} to = "/registracija"> Nemate profil? Registrajte se preko ovog linka.</Link>     
        </form>
        </div>
      </Layout>
      
    );
  }
}

export default Prijava
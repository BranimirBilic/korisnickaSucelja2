import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./prijava.module.css"
import Input from "../components/input/input"
import {Link, navigate} from "gatsby"
/*
const Registracija = () => (
  <Layout>
    <SEO title="Registracija" />  
    <div className = {styles.DivStyle}>
            <form className = {styles.Container}>                
                <Input type = "text" placeholder = "Ime"/>               
                <Input type = "text" placeholder = "Prezime"/>
                <Input type = "text" placeholder = "Email adresa"/>               
                <Input type = "password" placeholder = "Lozinka"/>
                <Input type = "password" placeholder = "Ponovite lozinku"/>
                <Link className = {styles.Button} to = "/termin">
                    Registracija
                </Link>                      
            </form>
      </div>
  </Layout>
)

export default Registracija*/

class Registracija extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      lastname:"",
      email: "",
      password: "",
      passwordConfirm:"",    
    };
  }

    onNameChange = event => {
      this.setState({ name: event.target.value });
    };
    onLastNameChange = event => {
      this.setState({ lastname: event.target.value });
    };
    onMailChange = event => {
      this.setState({ email: event.target.value });
    };
    onPasswordChange = event => {
      this.setState({ password: event.target.value });
    };
    onPasswordConfirmChange = event => {
      this.setState({ passwordConfirm: event.target.value });
    };

    onSubmitClick = event => {
      event.preventDefault();
      const {name, lastname, email, password, passwordConfirm} = this.state;
      if(name !== "" && lastname !== "" && email !== "" && password !== "" && passwordConfirm !== "" && password===passwordConfirm) {         
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
            <label>
              Ime:
              <input type="text" value={this.state.value} onChange={this.onNameChange} />
            </label>
            <label>
              Prezime:
              <input type="text" value={this.state.value} onChange={this.onLastNameChange} />
            </label>
            <label>
              Email adresa:
              <input type="text" value={this.state.value} onChange={this.onMailChange} />
            </label>
            <label>
              Lozinka:
              <input type="password" value={this.state.value} onChange={this.onPasswordChange} />
            </label>
            <label>
              Ponovite lozinku:
              <input type="password" value={this.state.value} onChange={this.onPasswordConfirmChange} />
            </label>
            <button 
                      type="submit" 
                      className={styles.Button}
                      onClick={this.onSubmitClick}
                  >Prijava</button>              
        </form>
        </div>
      </Layout>  
    );
  }
}

export default Registracija